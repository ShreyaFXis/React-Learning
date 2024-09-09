import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    // Define CSS styles as JavaScript objects
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }

    const buttonHoverStyle = {
      backgroundColor: '#218838',
    }

    const containerStyle = {
      textAlign: 'center',
      marginTop: '50px'
    }

    return (
      <div style={containerStyle}>
        <button 
          style={buttonStyle} 
          onClick={this.incrementCount}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Count {this.state.count}
        </button>
      </div>
    )
  }
}

export default ClassCounter
