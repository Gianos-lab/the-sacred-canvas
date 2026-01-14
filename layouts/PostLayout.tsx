import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <div className="pt-8 pb-4">
          <Link
            href={`/${basePath}`}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            &larr; Back to blog
          </Link>
        </div>

        {/* Header */}
        <header className="pb-8 text-center">
          <time
            dateTime={date}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
            {title}
          </h1>
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose dark:prose-invert prose-lg mx-auto max-w-none pb-12">
          {children}
        </div>

        {/* Navigation */}
        {(prev || next) && (
          <nav className="border-t border-gray-200 pt-8 pb-8 dark:border-gray-700">
            <div className="flex justify-between">
              <div className="w-1/2 pr-4">
                {prev && prev.path && (
                  <Link
                    href={`/${prev.path}`}
                    className="group block"
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      &larr; Previous
                    </span>
                    <span className="mt-1 block text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {prev.title}
                    </span>
                  </Link>
                )}
              </div>
              <div className="w-1/2 pl-4 text-right">
                {next && next.path && (
                  <Link
                    href={`/${next.path}`}
                    className="group block"
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Next &rarr;
                    </span>
                    <span className="mt-1 block text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        )}
      </article>
    </SectionContainer>
  )
}
