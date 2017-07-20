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
  componentDidUpdate(prevProps) {
    if (this.props.selectedOption !== prevProps.selectedOption) {
      this.setState({selectedOption: this.props.selectedOption})
    }
  }
  handleGroupChange = (group) => {
    let groupValue = group.target.value
    this.setState({
      selectedOption: groupValue
    })
    this.props.onSelect(groupValue)
  }
  render(){
    const hideIcon = this.props.hideIcon
    const smallButtons = this.props.smallButtons

    return (
      <div className="input-group input-group-unstyled">
        <span className={classnames('input-group-addon', {'hidden' : hideIcon})}>
          <i className="glyphicon glyphicon-bookmark"></i>
        </span>
        <div className="btn-group" data-toggle="buttons">
          <label className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'all'}, {'btn-sm' : smallButtons})}>
            All
            <input
              type="radio"
              name='options'
              value='all'
              defaultChecked
              onClick={(node) => this.handleGroupChange(node)}
            />
          </label>
          <label className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'family'}, {'btn-sm' : smallButtons})}>
            Family
            <input
              type="radio"
              name='options'
              value='family'
              onClick={(node) => this.handleGroupChange(node)}
            />
          </label>
          <label className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'friends'}, {'btn-sm' : smallButtons})}>
            Friends
            <input
              type="radio"
              name='options'
              value='friends'
              onClick={(node) => this.handleGroupChange(node)}
            />
          </label>
          <label
            className={classnames('btn', 'btn-default', {'btn-primary' : this.state.selectedOption == 'colleagues'}, {'btn-sm' : smallButtons})}>
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
  smallButtons: PropTypes.bool,
  hideIcon: PropTypes.bool,
}

export default GroupSelector
