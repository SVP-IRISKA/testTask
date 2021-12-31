import React, { useState } from 'react'

import PostItem from './PostItem'

// import Head from './head'

const Main = () => {
  // const [value, setValue] = useState('текст в инруте')
  const initialPost = [
    {
      id: 1,
      title: 'TITLE 1',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi doaxime ea.'
    },
    {
      id: 2,
      title: 'TITLE 2',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi doloribus labore enim '
    },
    {
      id: 3,
      title: 'TITLE 3',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
    }
  ]

  const [posts, setPosts] = useState(initialPost)

  return (
    <div>
      <form action="">
        <input className="form_add_post" type="text" placeholder="Title" />
        <input className="form_add_post" type="text" placeholder="description" />
        <button className="form_add_post" type="button">
          add a post
        </button>
      </form>
      <div className="app">
        <PostItem posts={posts} setPosts={setPosts} />
      </div>
    </div>
  )
}

export default Main
