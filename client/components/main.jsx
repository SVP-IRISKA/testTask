import React, { useState, useMemo } from 'react'
import PostForm from './PostForm'
import PostList from './PostList'
import MyInput from './UI_components/input/MyInput'
import MySelect from './UI_components/select/MySelect'

// import Head from './head'

const Main = () => {
  const initialPost = [
    {
      id: 1,
      title: 'AAAA',
      text: 'uuuuu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi doaxime ea.'
    },
    {
      id: 2,
      title: 'ppppp',
      text: 'KKKLorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi doloribus labore enim '
    },
    {
      id: 3,
      title: 'DDDDDD',
      text: 'aaaaa ipsum dolor sit, amet consectetur adipisicing elit'
    }
  ]

  const optionsSort = [
    { value: 'title', name: '...by title' },
    { value: 'text', name: '...by text' }
  ]

  const [posts, setPosts] = useState(initialPost)
  const [selectSort, setSelectSort] = useState('')
  const [searchPost, setSearchPost] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectSort) {
      return [...posts].sort((a, b) => a[selectSort].localeCompare(b[selectSort]))
    }
    return posts
  }, [selectSort, posts])

  const sortSearchPosts = useMemo(() => {
    return sortedPosts.filter((item) => item.title.toLowerCase().includes(searchPost))
  }, [searchPost, sortedPosts])

  const getSearchChangeInput = (e) => {
    setSearchPost(e.target.value)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id))
  }

  const postSort = (bySort) => {
    setSelectSort(bySort)
  }

  return (
    <div>
      <div className="main">
        <PostForm create={createPost} />
        <div>
          <MyInput placeholder="search..." value={searchPost} onChange={getSearchChangeInput} />
          <MySelect
            defaultSort="Sorting by..."
            options={optionsSort}
            value={selectSort}
            onChange={postSort}
          />
        </div>
        {sortSearchPosts.length ? (
          <PostList posts={sortSearchPosts} setPosts={setPosts} remove={removePost} />
        ) : (
          <div className="post_null">No posts</div>
        )}
      </div>
    </div>
  )
}

export default Main
