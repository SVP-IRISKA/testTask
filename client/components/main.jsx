import React, { useState, useEffect, Suspense } from 'react'
// import axios from 'axios'

import FilterPost from './FilterPost'
// import PostForm from './PostForm'
import PostList from './PostList'

import PostGetAPI from './API/PostGetAPI'

import { usePost } from '../hooks/usePosts'
import MyLoader from './UI_components/Loader/MyLoader'

// import Head from './head'

const Main = () => {
  const optionsSort = [
    { value: 'title', name: '...by title' },
    { value: 'body', name: '...by body' }
  ]

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  const sortSearchPosts = usePost(posts, filter.sort, filter.search)

  const getPosts = async () => {
    setIsPostsLoading(true)
    const post = await PostGetAPI.getAPI()
    setPosts(post.slice(0, 10))
    setIsPostsLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id))
  }

  const PostForm = React.lazy(() => import('./PostForm'))
  const PostFormSuspension = () => (
    <Suspense fallback={<MyLoader />}>
      <PostForm create={createPost} />
    </Suspense>
  )

  return (
    <div>
      <div className="main">
        <h1>Notebook of posts</h1>
        <PostFormSuspension />
        <FilterPost filter={filter} setFilter={setFilter} optionsSort={optionsSort} />
        {isPostsLoading ? (
          <MyLoader />
        ) : (
          <PostList posts={sortSearchPosts} setPosts={setPosts} remove={removePost} />
        )}
      </div>
    </div>
  )
}

export default Main
