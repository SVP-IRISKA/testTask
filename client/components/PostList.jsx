import React from 'react'

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id} className="post">
            <div className="post_description">
              <h3 className="post_title">{item.title}</h3>

              <div>{item.text}</div>
              <div className="post_btn">
                <button type="button" className="post_btn_del">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostList
