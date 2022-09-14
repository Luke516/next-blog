import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const DEFAULT_LAYOUT = 'AuthorLayout'

export default function About({ authorDetails }) {
  const { t } = useTranslation('common')

  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}

export async function getStaticProps({ locale }) {
  const authorDetails = await getFileBySlug('authors', ['default'])

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      authorDetails,
    },
  }
}
