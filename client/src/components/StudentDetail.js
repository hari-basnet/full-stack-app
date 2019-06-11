import React, { Component } from 'react'
import axios from 'axios'

class StudentDetail extends Component {
    state = {
        student: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const apiURL = `http://localhost:5000/api/v1.0/students/${id}`;
        axios.get(apiURL).then(response => {
            this.setState({
                student: response.data
            })
        });
    }

    render() {

        if (!this.state.student) {
            return <h1>Loading...</h1>
        }
        const { name, country, age, bio } = this.state.student;

        return (
            <div>
                <h2>{name}</h2>
                <h2>{country}</h2>
                <h2>{age}</h2>
                <h2>{bio}</h2>

            </div>
        )
    }
}


export default StudentDetail