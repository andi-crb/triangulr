import React from 'react';
import RadioGroup from 'react-radio-group'

module.exports = React.createClass({


  getInitialState: function () {
    return {
      taskName: "",
      priority: "",
      selectedValue: "",
      toDoItems: {}
    }
  },




  handleChange: function (e) {
    this.setState({taskName: e.target.value})
  },

  handlePriority: function (e) {
    this.setState({priority: e.target.value})
    console.log(this.state)
  },

  handleSubmit: function () {
    var key = this.state.taskName
    var value = this.state.priority
    var object = this.state.toDoItems
    object[key] = value
    this.setState({toDoItems: object})
    console.log(this.state.toDoItems)
  },

  render: function () {
    return (
      <div className="Form">
          <input type="text" onChange = {this.handleChange} /><br />
          <input type="text" onChange = {this.handlePriority} /><br />
          <input type="Submit" onClick = {this.handleSubmit} />  
      </div>
      )
  }
})
