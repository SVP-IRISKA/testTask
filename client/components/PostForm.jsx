import React, { useState } from 'react'

import MyButton from './UI_components/button/MyButton'
import MyInput from './UI_components/input/MyInput'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', text: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    // console.log('e', typeof e.target.value)
    if (post.title !== '' && post.text !== '') {
      const newPost = { ...post, id: Date.now(), title: post.title.toUpperCase() }
      create(newPost)
      setPost({ title: '', text: '' })
    } else {
      setPost({ ...post })
      // setPost({ title: '', text: '' })
    }
  }

  // const addNewPost = (e) => {
  //   e.preventDefault()
  //   const newPost = { ...post, id: Date.now() }
  //   create(newPost)
  //   setPost({ title: '', text: '' })
  // }

  const addTitle = (e) => {
    setPost({ ...post, title: e.target.value })
  }

  const addText = (e) => {
    setPost({ ...post, text: e.target.value })
  }

  return (
    <div>
      <form action="">
        <div className="post_input">
          <MyInput
            value={post.title}
            onChange={addTitle}
            className="form_add_post"
            type="text"
            placeholder="heading"
          />
          <MyInput
            value={post.text}
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
