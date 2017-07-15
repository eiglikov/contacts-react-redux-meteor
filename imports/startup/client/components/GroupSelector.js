import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class GroupSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: this.props.selectedOption
    }
  }

  handleGroupChange = (group) => {
    console.log(group.target)
    this.props.onSelect(group.target.value)
    this.setState({
      selectedOption: group.target.value
    })
  }

  render(){
    return (
      <div className="input-group input-group-unstyled">
        <span className="input-group-addon">
          <i className="glyphicon glyphicon-bookmark"></i>
        </span>
        <div className="btn-toolbar" data-toggle="buttons">


          <label className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'all'})}>
            All
            <input
              type="radio"
              name='options'
              value='all'
              onClick={(node) => this.handleGroupChange(node)}
            />
          </label>
          <label className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'family'})}>
            Family
            <input
              type="radio"
              name='options'
              value='family'
              onClick={(node) => this.handleGroupChange(node)}
            />
          </label>
          <label className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'friends'})}>
            Friends
            <input
              type="radio"
              name='options'
              value='friends'
              onClick={(node) => this.handleGroupChange(node)}
            />
          </label>
          <label
            className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'colleagues'})}>
            Colleagues
            <input
              type="radio"
              name='options'
              value='colleagues'
              onClick={(node) => this.handleGroupChange(node)}
            />
          </label>
        </div>
      </div>
    )
  }
}

GroupSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
}

export default GroupSelector
