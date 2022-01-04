import React, { useState } from 'react'

import MyButton from './UI_components/button/MyButton'
import MyInput from './UI_components/input/MyInput'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    if (post.title !== '' && post.body !== '') {
      const newPost = { ...post, id: Date.now(), title: post.title }
      create(newPost)
      setPost({ title: '', body: '' })
    } else {
      setPost({ ...post })
    }
  }

  const addTitle = (e) => {
    setPost({ ...post, title: e.target.value })
  }

  const addText = (e) => {
    setPost({ ...post, body: e.target.value })
  }

  return (
    <div>
      <form action="">
        <div className="post_input">
          <MyInput
            value={post.title}
            onChange={addTitle}
            className="form_add_post"
            type="body"
            placeholder="heading"
          />
          <MyInput
            value={post.body}
            onChange={addText}
            className="form_add_post"
            type="text"
            placeholder="text"
          />
        </div>
        <MyButton onClick={addNewPost} id="form_add_post">
          add a post
        </MyButton>
      </form>
    </div>
  )
}

export default PostForm
