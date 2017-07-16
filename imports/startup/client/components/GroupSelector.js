import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class GroupSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: this.props.selectedOption || 'all'
    }
    console.log("selectedOption in GS", this.props.selectedOption);

  }

  handleGroupChange = (group) => {
    console.log(group.target)
    let groupValue = group.target.value
    this.setState({
      selectedOption: groupValue
    })
    this.props.onSelect(groupValue)
  }

  render(){
    const hideIcon = this.props.hideIcon
    return (
      <div className="input-group input-group-unstyled">
        <span className={classnames('input-group-addon', {'hidden' : hideIcon})}>
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
  onSelect: PropTypes.func.isRequired
}

export default GroupSelector
