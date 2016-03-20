
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
        <div class="row">
          <div class="twelve columns">
            <Header />
          </div>
        </div>
        <div class="row">
          <div class="ten columns">
            <Build itemsList = {this.state.itemsList} />
          </div>
          <div class="two columns">
            <Form myFunc={this.handleChildFunc.bind(this)} />
          </div>
        </div>
      </div>)

  }
})
