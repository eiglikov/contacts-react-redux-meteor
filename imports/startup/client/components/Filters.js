import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import FilterLink from './FilterLink'
import GroupSelector from './GroupSelector'

const Filters = ({ history }) => {

  let filter = 'all'
  const handleSelect = (selected) => {
    console.log('filter handleSelect', selected)
    filter = selected
    history.push('/group/' + filter)
  }

  return(
      <GroupSelector
        onSelect={handleSelect}
        hideIcon={true}
        selectedOption={'all'}
      />
  )
}
//
// const mapStateToProps = state => {
//   console.log("state", state)
//
//   return {
//     history : history
//   }
// }
export default withRouter(Filters)
