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
      five: []
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
    rowfive.push(one[4].taskName, two[3].taskName, three[2].taskName, four[1].taskName, five[0].taskName)


    this.setState({one: rowone, two: rowtwo, three: rowthree, four: rowfour, five: rowfive});
    console.log("one", one)
    console.log("rowfive", rowfive)
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
    var fives = this.state.five
    var done = e.target.value
    var index = fives.indexOf(done)
    fives[index] = "DONE" 
    this.setState({five: fives})

  },


  handleDoneFour: function (e) {
    var fives = this.state.five
    var done = e.target.value
    var index = fives.indexOf(done)
    fives[index] = "DONE" 
    this.setState({five: fives})

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
      return <span className={"priority"+ones.indexOf(one).toString()}><input type="submit" value={one} onClick={this.handleDoneOne} /></span>;
    }.bind(this))
    var twos = this.state.two
    var twosList = twos.map(function(two){
      return <span className={"priority"+twos.indexOf(two).toString()}><input type="submit" value={two} onClick={this.handleDoneTwo} /></span>;
    }.bind(this))

    var threes = this.state.three
    var threesList = threes.map(function(three){
      return <span className={"priority"+threes.indexOf(three).toString()}><input type="submit" value={three} onClick={this.handleDoneThree} /></span>;
    }.bind(this))

    var fours = this.state.four
    var foursList = fours.map(function(four){
      return <span className={"priority"+fours.indexOf(four).toString()}><input type="submit" value={four} onClick={this.handleDoneFour} /></span>;
    }.bind(this))

    var fives = this.state.five
    var fivesList = fives.map(function(five){
      return <span className={"priority"+fives.indexOf(five).toString()}><input type="submit" value={five}  onClick={this.handleDoneFive} /></span>;
    }.bind(this))


    return (


      <div className="Build">
      <input type="Submit" value="Build" onClick = {this.handleChange} />
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

