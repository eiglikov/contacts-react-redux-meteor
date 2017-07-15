import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class GroupSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'all'
    }
  }

  handleGroupChange = (group) => {
    console.log(group.target);
    // let val = group.target.value;
    this.setState({
      selectedOption: group.target.value
    })
    this.props.onSelect(group.target.value);
  }
  render(){
    return (
      <div className="btn-group input-group input-group-unstyled" data-toggle="buttons"

      >
        <span className="input-group-addon">
          <i className="glyphicon glyphicon-bookmark"></i>
        </span>
        <label className="">
          All
          <input
            type="radio"
            value='all'
            name="options"
            checked={this.state.selectedOption === 'all'}
            onChange={(node) => this.handleGroupChange(node)}

          />
        </label>
        <label className="">
          Family
          <input
            type="radio"
            value='family'
            name="options"
            onChange={(node) => this.handleGroupChange(node)}

            checked={this.state.selectedOption === 'family'}

          />
        </label>
        <label className="">
          Friends
          <input
            type="radio"
            value='friends'
            name="options"
            checked={this.state.selectedOption === 'friends'}
            onChange={(node) => this.handleGroupChange(node)}

          />
        </label>
        <label className="">
          Colleagues
          <input
            type="radio"
            value='colleagues'
            name="options"
            checked={this.state.selectedOption === 'colleagues'}
            onChange={(node) => this.handleGroupChange(node)}

          />
        </label>
      </div>
    )
  }
}

GroupSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
}

export default GroupSelector;
