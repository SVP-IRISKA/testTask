import React from 'react'

import '../styles/main.css'
import PostItem from './PostItem'

const PostList = ({ posts, remove }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={post.id} number={index + 1} post={post} remove={remove} />
      ))}
    </div>
  )
}

export default PostList
