import React, { Component } from 'react'

export default class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    login = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
        
    }

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={ this.login }>
                    <h5 className="grey-text text-darken-3">Add project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea type="content" id="content" name="content" onChange={ this.handleChange } className="materialize-textarea" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
