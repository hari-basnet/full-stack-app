import React, { Component } from 'react'
import axios from 'axios'

class EditStudent extends Component {
    state = {
        name: '',
        country: '',
        age: '',
        bio: ''

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const url = `/api/v1.0/students/${id}`
        axios.get(url).then(response => {
            const { name, country, age, bio } = response.data
            this.setState({
                name,
                country,
                age,
                bio
            })
        }).catch(error => {
            console.log(error)
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const url = `/api/v1.0/students/${id}`
        axios.put(url, this.state)
            .then(response => {
                this.props.history.push('/students')
            }).catch(error => console.log(error))
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

                <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea
                        name="bio"
                        class="form-control"
                        value={this.state.bio}
                        onChange={this.handleChange} />
                </div>
                <button class="btn btn-primary" type="submit">Update</button>

            </form>
        )
    }
}
export default EditStudent