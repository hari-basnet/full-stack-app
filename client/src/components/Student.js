import React from 'react'
import { NavLink } from 'react-router-dom'

const Student = (props) => {
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.country}</td>
            <td>{props.student.age}</td>
            <td>{props.student.bio}</td>
            <tr>
                <NavLink to={`/students/${props.student._id}`} className="btn btn-primary">Detail</NavLink> {' '} {' '}
                <NavLink to={`/edit/${props.student._id}`} className="btn btn-primary">Edit</NavLink> {' '} {' '}
                <button className="btn btn-danger">Delete</button>
            </tr>
        </tr>
    )
}

export default Student