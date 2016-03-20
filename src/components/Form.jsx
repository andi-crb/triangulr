import React from 'react';
import RadioGroup from 'react-radio-group'
import ReactDOM from 'react-dom'
import App from './App.jsx'


export default React.createClass({


  getInitialState: function () {
    return {
      taskName: "",
      priority: "",
      selectedValue: "",
      toDoItems: []
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
    var newObject = {}
    newObject.taskName = this.state.taskName
    newObject.priority = this.state.priority
    var arr = this.state.toDoItems
    arr.push(newObject)
    console.log("arr", arr)
    this.setState({toDoItems: arr})
    console.log(this.state.toDoItems)
    this.props.myFunc(this.state.toDoItems);
  },

  render: function () {
    var itemsForExport = this.state.toDoItems   
    return (

      <div className="Form">
          <input type="text" onChange = {this.handleChange} /><br />
          <input type="text" onChange = {this.handlePriority} /><br />
          <input type="Submit" className="regular"  onClick = {this.handleSubmit} /><br />
      </div>
      )
  }


})

