import React, { Component } from 'react'
import axios from 'axios'

class AddStudent extends Component {
    state = {
        name: '',
        country: '',
        age: '',
        bio: '',

    }

    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, this.state)
        .then(response => {})
        .catch(error => {})

    }
    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="name" 
                    placeholder="Enter Name" 
                    value ={this.state.name} 
                    onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="country" 
                    placeholder="Enter Country" 
                    value ={this.state.country} 
                    onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="age" 
                    placeholder="Enter age" 
                    value ={this.state.age} 
                    onChange={this.handleChange}/>
                </div>

                <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea 
                    name="bio" 
                    class="form-control" 
                    value ={this.state.bio} 
                    onChange={this.handleChange}/>
                </div>
                <button class="btn btn-primary" type="submit">Add Student</button>

            </form>
        )
    }
}
export default AddStudent