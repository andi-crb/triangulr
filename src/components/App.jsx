
import React from 'react'


import Header from './Header.jsx'
import Form from './Form.jsx'


export default React.createClass({

  render() {
  	console.log('app rendering')
    return(

<div id='app'>

    <Header />
    <Form />

</div>)

  }
})
