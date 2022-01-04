import React from 'react'

import '../styles/main.css'

import MyButton from './UI_components/button/MyButton'

const PostItem = (props) => {
  const removePost = () => {
    props.remove(props.post)
  }

  return (
    <div className="post_description">
      <div className="post">
        <div className="post_title">
          {props.number}. {props.post.title}
          <hr />
          <div className="post_text">{props.post.body}</div>
        </div>
        <MyButton onClick={removePost} id="delete_post">
          delete{' '}
        </MyButton>
      </div>
    </div>
  )
}

export default PostItem
