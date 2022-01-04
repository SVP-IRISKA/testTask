import React from 'react'

import MyInput from './UI_components/input/MyInput'
import MySelect from './UI_components/select/MySelect'

const FilterPost = ({ filter, setFilter, optionsSort }) => {
  const getSearchChangeInput = (e) => setFilter({ ...filter, search: e.target.value.toLowerCase() })

  return (
    <div>
      <MyInput placeholder="search..." value={filter.search} onChange={getSearchChangeInput} />
      <MySelect
        defaultSort="Sorting by..."
        options={optionsSort}
        value={filter.sort}
        onChange={(selectSort) => setFilter({ ...filter, sort: selectSort })}
      />
    </div>
  )
}

export default FilterPost
