import React, { Component } from 'react';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: props.message
    };
  }

  changeMessage() {
    this.setState({
      message: 'You just clicked in my mind... 🌚'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button 
          onClick={() => this.changeMessage()} 
          style={{
            padding: '10px 20px',
            backgroundColor: 'transparent',  // Remove background color
            color: '#000',                   // Set text color
            border: '2px solid #000',        // Simple black border
            borderRadius: '5px',
            fontSize: '18px',                // Increase font size
            cursor: 'pointer'
          }}
        >
          what!?
        </button>
      </div>
    );
  }
}

export default Message;


{}