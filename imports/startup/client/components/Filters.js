import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import GroupSelector from './GroupSelector'

class Filters extends Component {
  constructor(props) {
    super(props)
    const initialPath = this.splitPath(props.location.pathname)
    this.state = {
      location: initialPath
    }
  }
  handleSelect = (selected) => {
    this.setState({
      location: selected
    })
    this.props.history.push('/group/' + selected)
  }
  splitPath = (location) => {
    // split /group/(pathname) into (pathname)
    return location.split('/')[2]
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.handleSelect(this.splitPath(this.props.location.pathname))
    }
  }
  render(){
    return(
      <GroupSelector
        onSelect={this.handleSelect}
        hideIcon={true}
        selectedOption={this.state.location}
      />
    )
  }
}

export default withRouter(Filters)
