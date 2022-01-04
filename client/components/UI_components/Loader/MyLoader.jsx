import React from 'react'

import classStyle from './MyLoader.module.css'

const MyLoader = () => {
  return (
    <div>
      <div className={classStyle.load_wrapp}>
        <div className={classStyle.load}>
          <div className={classStyle.letter_holder}>
            <div className={classStyle.letter}>
              <div className={classStyle.l_1}>L</div>
              <div className={classStyle.l_2}>o</div>
              <div className={classStyle.l_3}>a</div>
              <div className={classStyle.l_4}>d</div>
              <div className={classStyle.l_5}>i</div>
              <div className={classStyle.l_6}>n</div>
              <div className={classStyle.l_7}>g</div>
              <div className={classStyle.l_8}>.</div>
              <div className={classStyle.l_9}>.</div>
              <div className={classStyle.l_10}>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyLoader
