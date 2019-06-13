import React, { Component } from 'react'
import Student from '../components/Student'
import Axios from 'axios';

class StudentList extends Component {
    state = {
        students: []
    }
    componentDidMount() {
        const apiURL = 'http://localhost:5000/api/v1.0/students';

        Axios.get(apiURL).then(response => {
            this.setState({
                students: response.data
            })
        })


        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    students: data
                })
            })
    }

    renderStudentList = () => {
        const { students } = this.state;
        return students.map((student) => <Student key={student._id} student={student} />)
    }
    render() {

        return (
            <div>
                <h3>Numbers of Student: {this.state.students.length}</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderStudentList()
                        }

                    </tbody>
                </table>

            </div>
        )
    }
}


export default StudentList