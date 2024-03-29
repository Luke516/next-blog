import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const DEFAULT_LAYOUT = 'PostSimple'

// TODO: change var names (post -> snippets)
export async function getStaticPaths() {
  const posts = getFiles('snippets')
  // TODO: read locales from config
  return {
    paths: posts.flatMap((p) => [
      {
        params: {
          slug: formatSlug(p).split('/'),
        },
        locale: 'en',
      },
      {
        params: {
          slug: formatSlug(p).split('/'),
        },
        locale: 'zh',
      },
    ]),
    fallback: false,
  }
}

export async function getStaticProps({ params, locale }) {
  const allPosts = await getAllFilesFrontMatter('snippets')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('snippets', params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      post,
      authorDetails,
      prev,
      next,
    },
  }
}

export default function Snippet({ post, authorDetails, prev, next }) {
  const { t } = useTranslation('common')
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
