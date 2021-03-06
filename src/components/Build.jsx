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
      this.setState({info: "Triangulr is a to-do list prioritisation app. It's designed to ensure that the user's focus is on the most important tasks, while also ensuring that those designated lower priority don't get neglected entirely. Triangulr is an app I (Andi Buchanan) created when I was first learning React, to get used to using the library. As such, while it is possible to add tasks and use the app in one sitting, it has no data persistence (ie your tasks disappear when you close the browser) so I recommend just using the demo button if you want to have a play. Click on the tasks to mark them as complete."})
    } else {
      this.setState({info: ""})
    }
  },

  handleChange: function () {
    this.setState({itemsList: this.props.itemsList})
    this.buildTriangle()
  },

  handleDemo: function () {
    var demoList = [
      {taskName: "get prescription", priority: '1'},
      {taskName:  "put out fire", priority: '1'},
      {taskName:  "make dinner", priority: '1'},
      {taskName:  "pay bills", priority: '1'},
      {taskName:  "buy train pass", priority:'1' },
      {taskName:  "complete assignment", priority: '2'},
      {taskName:  "apply for job", priority: '2'},
      {taskName:  "clean kitchen", priority: '2'},
      {taskName:  "book appointment", priority: '2'},
      {taskName:  "book holiday", priority: '3'},
      {taskName:  "set up savings account", priority: '3'},
      {taskName:  "confirm coffee date", priority: '3'},
      {taskName:  "reorganise room", priority: '4'},
      {taskName:  "paint walls", priority: '4'},
      {taskName:  "make long term plan", priority: '5'}
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
    var ones = this.state.one
    if (ones[0] == "DONE") {
      var twos = this.state.two
      var done = e.target.value
      var index = twos.indexOf(done)
      twos[index] = "DONE"
      this.setState({two: twos})
    } else {
      alert("Sorry, you must complete the tasks above this one first.")
    }
  },

  handleDoneThree: function (e) {
    var twos = this.state.two
    var threes = this.state.three
    var done = e.target.value
    var index = threes.indexOf(done)
    if ((index == 0 && twos[0] == "DONE") || (index == 1 && twos[0] == "DONE" && twos[1] == "DONE") || (index == 2 && twos[1] == "DONE")) {
      threes[index] = "DONE"
    }
    else {
      alert("Sorry, you must complete the tasks above this one first.")
    }
    this.setState({three: threes})
  },

  handleDoneFour: function (e) {
    var threes = this.state.three
    var fours = this.state.four
    var done = e.target.value
    var index = fours.indexOf(done)
    if ((index == 0 && threes[0] == "DONE") || (index == 1 && threes[0] == "DONE" && threes[1] == "DONE") || (index == 2 && threes[1] == "DONE" && threes[2] == "DONE") || (index == 3 && threes[2] == "DONE")) {
      fours[index] = "DONE"
    }
    else {
      alert("Sorry, you must complete the tasks above this one first.")
    }
    this.setState({four: fours})
  },

  handleDoneFive: function (e) {
      var fours = this.state.four
    var fives = this.state.five
    var done = e.target.value
    var index = fives.indexOf(done)
    if ((index == 0 && fours[0] == "DONE") || (index == 1 && fours[0] == "DONE" && fours[1] == "DONE") || (index == 2 && fours[1] == "DONE" && fours[2] == "DONE") || (index == 3 && fours[2] == "DONE" && fours[3] == "DONE") || (index == 4 && fours[3] == "DONE")) {
      fives[index] = "DONE"
    }
    else {
      alert("Sorry, you must complete the tasks above this one first.")
    }
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
