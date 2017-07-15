import React from 'react'
import FilterLink from './FilterLink'

const Filters = () => (
  <div className='row'>
    {'Groups: '}
    <FilterLink
      filter="all"
    >
      {'All'}
    </FilterLink>
    {' '}
    <FilterLink
      filter="family"
    >
      {'Family'}
    </FilterLink>
    {' '}
    <FilterLink
      filter="friends"
    >
      {'Friends'}
    </FilterLink>
    {' '}
    <FilterLink
      filter="colleagues"
    >
      {'Colleagues'}
    </FilterLink>
  </div>
        )

        export default Filters
