import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Student = (props) => {

    const deleteStudent = (id) => {

        const url = `/api/v1.0/students/${id}`
        axios.delete(url)
            .then(response => {
                this.props.history.push('/students')
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.country}</td>
            <td>{props.student.age}</td>
            <td>{props.student.bio}</td>
            <tr>
                <NavLink to={`/students/${props.student._id}`} className="btn btn-primary">Detail</NavLink> {' '} {' '}
                <NavLink to={`/edit/${props.student._id}`} className="btn btn-primary">Edit</NavLink> {' '} {' '}
                <button onClick={() => deleteStudent(props.student._id)} className="btn btn-danger">Delete</button>
            </tr>
        </tr>
    )
}

export default Student