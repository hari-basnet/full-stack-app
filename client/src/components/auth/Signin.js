import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
    state = {
        email: '',
        password: '',

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
        axios.post('/api/v1.0/users/signin', this.state)
            .then(response => {
                this.props.history.push('/students')

            })
            .catch(error => console.log(error))

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="form-control" placeholder="Email"
                        value={this.state.email}
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

                <button class="btn btn-primary" type="submit">Sign In</button>

            </form>
        )
    }
}

export default Signin
