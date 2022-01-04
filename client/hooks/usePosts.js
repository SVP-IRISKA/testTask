import { useMemo } from 'react'

export const useSortPost = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])
  return sortedPosts
}

export const usePost = (posts, sort, search) => {
  const sortedPosts = useSortPost(posts, sort)
  const sortSearchPosts = useMemo(() => {
    return sortedPosts.filter((item) => item.title.toLowerCase().includes(search))
  }, [search, sortedPosts])
  return sortSearchPosts
}
