import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts).map((post, index) => ({
    ...post,
    images: sortedPosts[index].images,
  }))
  return <Main posts={posts} />
}
