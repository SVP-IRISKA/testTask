import React from 'react'

import '../styles/main.css'
import PostList from './PostList'

const PostItem = ({ posts }) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default PostItem
