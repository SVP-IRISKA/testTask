import React from 'react'

import classStyle from './MyInput.module.css'

const MyInput = (props) => {
  return <input {...props} className={classStyle.myInput} />
}

export default MyInput
