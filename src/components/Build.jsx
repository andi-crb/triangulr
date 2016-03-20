import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'
import _ from 'lodash';


export default React.createClass({


  getInitialState: function () {
    return {
      one: []
    }

  },



  handleChange: function () {
    function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
    console.log("List Items", this.props.itemsList)
    // var itemsList = this.props.itemsList
    var itemsList = [
      {taskName: "not die", priority: '1'},
      {taskName:  "breathe", priority: '1'},
      {taskName:  "drink water", priority: '1'},
      {taskName:  "photosynthesise", priority: '1'},
      {taskName:  "keep heart beating", priority:'1' },
      {taskName: "go to work", priority: '2'},
      {taskName:  "pay the mortgage", priority: '2'},
      {taskName:  "cook", priority: '2'},
      {taskName: "pay bills", priority: '2'},
      {taskName: "participate in society", priority: '3'},
      {taskName: "have friends", priority: '3'},
      {taskName: "find love", priority: '3'},
      {taskName: "be happy", priority: '4'},
      {taskName: "be a lobster", priority: '4'},
      {taskName: "conquer the world", priority: '5'}
    ]
    itemsList = shuffleArray(itemsList)
    console.log("itemsList", itemsList)
    var one = _.filter(itemsList, { 'priority': '1'});
    var two = _.filter(itemsList, { 'priority': '2'});
    var three = _.filter(itemsList, { 'priority': '3'});
    var four = _.filter(itemsList, { 'priority': '4'});
    var five = _.filter(itemsList, { 'priority': '5'});
    var rowone = []
    var rowtwo = []
    var rowthree = []
    var rowfour = []
    var rowfive = []
    rowone.push(one[0].taskName)
    rowtwo.push(one[1].taskName, two[0].taskName)
    rowthree.push(one[2].taskName, two[1].taskName, three[0].taskName)
    rowfour.push(one[3].taskName, two[2].taskName, three[1].taskName, four[0].taskName)
    rowfive.push(one[4].taskName, two[3].taskName, three[2].taskName, two[1].taskName, five[0].taskName)


    this.setState({one: "hello this is one"});
    console.log("one", one)
    console.log("rowfive", rowfive)
  },



  render: function () {


    return (

      <div className="Build">
      <input type="Submit" value="Build" onClick = {this.handleChange} />
      <p>{this.state.one}</p>
      </div>
      )
  }


})

