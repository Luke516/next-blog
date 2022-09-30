import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SnippetListLayout from '@/layouts/SnippetListLayout'

export const SNIPPETS_PER_PAGE = 5

export default function Snippets({ posts, initialDisplayPosts, pagination }) {
  const { t } = useTranslation('common')

  return (
    <>
      <PageSEO
        title={`Code snippets - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <SnippetListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={t('Code snippets')}
      />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter('snippets')
  const initialDisplayPosts = posts.slice(0, SNIPPETS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / SNIPPETS_PER_PAGE),
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      initialDisplayPosts,
      posts,
      pagination,
    },
  }
}
