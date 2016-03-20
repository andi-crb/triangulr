
import React from 'react'


import Header from './Header.jsx'
import Form from './Form.jsx'
import Build from './Build.jsx'

// var objectToPass = []

export default React.createClass({

    getInitialState: function () {
    return {
      itemsList: {}
    }
  },

  handleChildFunc: function (p) {
    console.log("IS this working?", p, "type", typeof p, p[2])
    this.setState({itemsList: p})
  },

  render() {
    return(

<div id='app'>

    <Header />
    <Form myFunc={this.handleChildFunc.bind(this)} />
    <Build itemsList = {this.state.itemsList} />
</div>)

  }
})
