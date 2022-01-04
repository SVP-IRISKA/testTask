import React from 'react'

import '../styles/main.css'
import PostItem from './PostItem'

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <div className="post_null">No posts</div>
  }
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={post.id} number={index + 1} post={post} remove={remove} />
      ))}
    </div>
  )
}

export default PostList
