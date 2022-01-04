import React from 'react'

import classStyle from './MySelect.module.css'

const MySelect = ({
  options,
  defaultSort,
  value,
  onChange
}) => {
  return (
    <div>
      <select className={classStyle.mySelect} value={value} onChange={(e) => onChange(e.target.value)} id="">
        <option value="">{defaultSort}</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MySelect
