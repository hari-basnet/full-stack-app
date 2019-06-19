import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    state = {
        firstName: '',
        username: '',
        email: '',
        password: '',
        password2: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('/api/v1.0/users/signup', this.state)
            .then(response => {
                this.props.history.push('/signin')

            })
            .catch(error => console.log(error))

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text" name="firstName"
                        class="form-control" placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text"
                        name="username"
                        class="form-control" placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="form-control" placeholder="Email"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div class="form-group">
                    <label for="password2">Confirm Password</label>
                    <input type="password" name="password2" class="form-control" placeholder="Confirm Password"
                        value={this.state.password2}
                        onChange={this.handleChange}
                    />
                </div>
                <button class="btn btn-primary" type="submit">Sign Up</button>

            </form>
        )
    }
}

export default withRouter(Signup);
