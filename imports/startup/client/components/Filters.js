import React from 'react'
import { withRouter } from 'react-router-dom'
import GroupSelector from './GroupSelector'

const Filters = ({ history }) => {
  // the path where user currently is
  let defaultSelectedOption = history.location.pathname.split('/')[2];
  const handleSelect = (selected) => {
    history.push('/group/' + selected)
  }
  return(
    <GroupSelector
      onSelect={handleSelect}
      hideIcon={true}
      selectedOption={defaultSelectedOption}
    />
  )
}

export default withRouter(Filters)
