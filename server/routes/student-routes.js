const express = require('express');
const studentRoute = express.Router();
const Student = require('../models/Student');

// creating home route
studentRoute.get('/', (req, res) => {
    res.send('mern application')
})

studentRoute.get('/students', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            return res.status(404).send('Students not found')
        }
        res.json(students)
    })

})

// this route is to get one student 
studentRoute.get('/students/:id', (req, res) => {
    const id = req.params.id;
    Student.findOne({ _id: id }, (err, student) => {
        if (err) {
            return res.status(404).send('Student not found')
        }
        res.json(student)
    })
})

studentRoute.post('/students', (req, res) => {
    // we can destructure the req.body here if we want to manipulate the data
    const createdAt = new Date();
    req.body.createdAt = createdAt

    // creating new instance of schema as our body for the database 
    const student = new Student(req.body)

    // save only give pending promise
    student.save().then(st => {
        res.json(st)
    })
        .catch(error => console.log(err))

})

// edit route
studentRoute.put('/students/edit/:id', (req, res) => {
    const _id = req.params.id;
    const { name, country, age, bio } = req.body;
    Student.findOne({ _id }, (err, student) => {
        if (err) {
            return res.status(404).send('Something is wrong')
        }
        student.name = name;
        student.country = country;
        student.age = age;
        student.bio = bio;
        student.save().then(student => {
            res.send('Saved')
        })
            .catch(error => console.log(error))
    })

})

// delete route
studentRoute.delete('/students/:id', (req, res) => {
    const _id = req.params.id;
    Student.deleteOne({ _id }, (err, student) => {
        if (err) {
            return res.status(404).send('Something is wrong')
        }
        res.send('A student has been deleted')

    })

})


module.exports = studentRoute