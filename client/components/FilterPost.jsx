import React from 'react'
import MyButton from './UI_components/button/MyButton'

import MyInput from './UI_components/input/MyInput'
import MySelect from './UI_components/select/MySelect'

const FilterPost = ({ filter, setFilter, optionsSort }) => {
  const getSearchChangeInput = (e) => setFilter({ ...filter, search: e.target.value.toLowerCase() })
  const getSearchClearInput = () => {
    return setFilter({ ...filter, search: '' })
  }

  return (
    <div>
      <MyInput placeholder="search..." value={filter.search} onChange={getSearchChangeInput} />
      <MyButton id="clear_search" onClick={getSearchClearInput}>clear search</MyButton>
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
