import React, { Component } from 'react'
import axios from 'axios'

class AddStudent extends Component {
    state = {
        name: '',
        country: '',
        age: '',
        bio: ''

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1.0/students', this.state)
            .then(response => {
                this.props.history.push('/students');
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({
            name: '',
            country: '',
            age: '',
            bio: ''
        })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col col-md-8">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </div>

                    </div>
                    <div className="col col-md-8">
                        <div class="form-group">
                            <label for="country">Country</label>
                            <input
                                type="text"
                                class="form-control"
                                name="country"
                                placeholder="Enter Country"
                                value={this.state.country}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col col-md-8">
                        <div class="form-group">
                            <label for="age">Age</label>
                            <input
                                type="text"
                                class="form-control"
                                name="age"
                                placeholder="Enter age"
                                value={this.state.age}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                </div>




                <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea
                        name="bio"
                        class="form-control"
                        value={this.state.bio}
                        onChange={this.handleChange} />
                </div>
                <button class="btn btn-primary" type="submit">Add Student</button>

            </form>
        )
    }
}
export default AddStudent