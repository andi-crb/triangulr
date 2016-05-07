import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'
import _ from 'lodash';

export default React.createClass({

  getInitialState: function () {
    return {
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
      info: "",
      itemsList: []
    }
  },

  handleInfo: function () {
    if (this.state.info == "") {
      this.setState({itemsList: "Triangulr is a to-do list prioritisation app. It's designed to ensure that the user's focus is on the most important tasks..."})
    } else {
      this.setState({itemsList: ""})
    }
  },

  handleChange: function () {
  this.setState({itemsList: this.props.itemsList})
  this.buildTriangle()
  },

  handleDemo: function () {
  var demoList = [
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
  this.setState({itemsList: demoList})
  this.buildTriangle()
  },

  shuffleArray: function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  },

  buildTriangle: function () {
    var itemsList = this.state.itemsList
    itemsList = this.shuffleArray(itemsList)
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
    rowfive.push(one[4].taskName, two[3].taskName, three[2].taskName, four[1].taskName, five[0].taskName)
    this.setState({one: rowone, two: rowtwo, three: rowthree, four: rowfour, five: rowfive});
  },

  handleDoneOne: function (e) {
    var ones = this.state.one
    var done = e.target.value
    var index = ones.indexOf(done)
    ones[index] = "DONE"
    this.setState({one: ones})
  },

  handleDoneTwo: function (e) {
    var twos = this.state.two
    var done = e.target.value
    var index = twos.indexOf(done)
    twos[index] = "DONE"
    this.setState({two: twos})
  },

  handleDoneThree: function (e) {
    var threes = this.state.three
    var done = e.target.value
    var index = threes.indexOf(done)
    threes[index] = "DONE"
    this.setState({three: threes})
  },

  handleDoneFour: function (e) {
    var fours = this.state.four
    var done = e.target.value
    var index = fours.indexOf(done)
    fours[index] = "DONE"
    this.setState({four: fours})
  },

  handleDoneFive: function (e) {
    var fives = this.state.five
    var done = e.target.value
    console.log(fives, done)
    var index = fives.indexOf(done)
    fives[index] = "DONE"
    this.setState({five: fives})
  },

  render: function () {
    var ones = this.state.one
    var onesList = ones.map(function(one){
      return <span  ><input type="submit" id={one} value={one} className={"priority"+ones.indexOf(one).toString()} onClick={this.handleDoneOne} /></span>;
    }.bind(this))
    var twos = this.state.two
    var twosList = twos.map(function(two){
      return <span ><input type="submit" value={two} id={two} className={"priority"+twos.indexOf(two).toString()} onClick={this.handleDoneTwo} /></span>;
    }.bind(this))
    var threes = this.state.three
    var threesList = threes.map(function(three){
      return <span ><input type="submit" value={three} id={three} className={"priority"+threes.indexOf(three).toString()} onClick={this.handleDoneThree} /></span>;
    }.bind(this))
    var fours = this.state.four
    var foursList = fours.map(function(four){
      return <span ><input type="submit" value={four} id={four} className={"priority"+fours.indexOf(four).toString()} onClick={this.handleDoneFour} /></span>;
    }.bind(this))
    var fives = this.state.five
    var fivesList = fives.map(function(five){
      return <span  ><input type="submit" value={five} id={five} className={"priority"+fives.indexOf(five).toString()} onClick={this.handleDoneFive} /></span>;
    }.bind(this))
    var info = this.state.info

    return (
      <div className="Build">
        <input type="Submit" value="Build" className="regular" onClick = {this.handleChange} />
        <input type="Submit" value="Demo" className="regular" onClick = {this.handleDemo} />
        <input type="Submit" value="Show/Hide Info" className="regular" onClick = {this.handleInfo} />
        <div className="Info">
          <p>{info}</p>
        </div>
        <div className="Ones">
          <p>{onesList}</p>
        </div>
        <div className="Ones">
          <p>{twosList}</p>
        </div>
        <div className="Ones">
          <p>{threesList}</p>
        </div>
        <div className="Ones">
          <p>{foursList}</p>
        </div>
        <div className="Ones">
          <p>{fivesList}</p>
        </div>
      </div>
      )
  }
})
