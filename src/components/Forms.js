import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			comments: '',
			topic: 'react'
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			comments: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { username, comments, topic } = this.state

		// CSS styles as JS objects
		const containerStyle = {
			maxWidth: '400px',
			margin: '0 auto',
			padding: '20px',
			border: '1px solid #ccc',
			borderRadius: '8px',
			backgroundColor: '#f9f9f9',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		}

		const labelStyle = {
			display: 'block',
			marginBottom: '5px',
			fontWeight: 'bold',
		}

		const inputStyle = {
			width: '100%',
			padding: '8px',
			border: '1px solid #ccc',
			borderRadius: '4px',
			fontSize: '16px',
			marginBottom: '15px',
		}

		const buttonStyle = {
			width: '100%',
			padding: '10px',
			backgroundColor: '#28a745',
			color: 'white',
			border: 'none',
			borderRadius: '4px',
			fontSize: '16px',
			cursor: 'pointer',
			transition: 'background-color 0.3s ease',
		}

		const buttonHoverStyle = {
			backgroundColor: '#218838',
		}

		return (
			<form style={containerStyle} onSubmit={this.handleSubmit}>
				<div>
					<label style={labelStyle}>Username</label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
						style={inputStyle}
					/>
				</div>
				<div>
					<label style={labelStyle}>Comments</label>
					<textarea
						value={comments}
						onChange={this.handleCommentsChange}
						style={inputStyle}
					/>
				</div>
				<div>
					<label style={labelStyle}>Topic</label>
					<select value={topic} onChange={this.handleTopicChange} style={inputStyle}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit" style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
					Submit
				</button>
			</form>
		)
	}
}

export default Form
