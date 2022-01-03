import React from 'react'

import classStyle from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} type="button" className={classStyle.myButton}>
      {children}
    </button>
  )
}

export default MyButton
