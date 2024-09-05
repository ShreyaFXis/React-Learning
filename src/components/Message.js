import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
  }

  changeMessage() {
    this.setState({
      message: 'You just clicked in my mind... 🌚'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>what!?</button>
      </div>
    )
  }
}

export default Message