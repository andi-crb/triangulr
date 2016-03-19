// ----- required packages ----- //

var express = require('express')
var http = require('http')
var Primus = require('primus.io')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var port = process.env.PORT || 8080

// ----- create app and server ----- //

var app = express()
var server = http.createServer(app)

// ----- set up middleware ----- //

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// ----- set up websockets under primus.io ----- //

var primus = new Primus(server, { 
  port: '8080',
  origins: '*',
  transformer: 'websockets',
  parser: 'JSON'
})

// // ----- test of routing ----- //

// app.get('/test', function (req, res) {
//   console.log("GET received on /test")
//   res.send("Hi. You did a GET request to /test")
// });

// // ----- make a connection and respond ----- //

// var messages = [
//   // { message: 'hello from server' }
// ]

// var connMessages = []

// var sparks = []


// primus.on('connection', spark => {
//   sparks.push(spark)
//   console.log('server.js - primus - says: connection established')
//   spark.on('message', msg => {
//     console.log("server.js - primus - message is now: ", msg)
//     msg.id = spark.id
//     console.log("server.js - primus - message with spark.id is now: ", msg)
//     messages.push(msg)
//     // connMessages.push(connMsg)
//     console.log("server.js - primus - says: msg is ", msg)
//     // console.log("server.js - primus - says: connMsg is ", connMsg)

//     // ------ logic to average the mood data ----- //
//     var moodTotal = 0
//     var moodAvg = 0
//     messages.forEach(sp => {
//       moodTotal += sp.message
//     })
//     moodAvg = Math.ceil(moodTotal / messages.length)
//     console.log("server.js - primus - moodAvg is: ", moodAvg)
//     spark.send('refresh', moodAvg)
//     //-------------------------------------------------------------- //

//     // cycle through each connected client
//     // sparks.forEach(sp => {
//     //   sp.send('refresh', messages)
//     //   console.log('server.js - primus - the  messages are: ', messages)
//     // })
//   })
// })



// ----- set port and start server ----- //

// if (require.main === module) {
  server.listen(port, function () {
    console.log('http server listening on port: ', port)
  })
// }