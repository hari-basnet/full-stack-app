const express = require('express');
const studentRoute = express.Router();
const Student = require('../models/Student');
const jwt = require('jsonwebtoken');
const passport = require('passport');


// creating home route
studentRoute.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('Home page')
});

studentRoute.get('/students', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            return res.status(404).send('Students not found')
        }
        res.json(students)
    })

})
// studentRoute.get('/students', verifyToken, (req, res) => {
//     jwt.verify(req.token, 'keys.secretOrKey', function (err, data) {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             Student.find({}, (err, students) => {
//                 if (err) {
//                     console.log('A create use has been access... ', data)
//                     return res.status(404).send('Students not found')
//                 }
//                 res.json(students)
//             })
//         }
//     })

// })

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
studentRoute.put('/students/:id', (req, res) => {
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
    Student.deleteOne({ _id }, (err) => {
        if (err) {
            return res.status(404).send('Something is wrong')
        }
        res.send('A student has been deleted')

    })

})


// function verifyToken(req, res, next) {
//     // add authorization to our headers
//     const bearerHeader = req.headers['authorization'];
//     if (bearerHeader) {
//         //Split at the space
//         const bearer = bearerHeader.split(' ');
//         //Get token from an array
//         const bearerToken = bearer[1];
//         //set the token
//         req.token = bearerToken;
//         //Next middleware
//         next();
//     } else {
//         return res.status(403).json({ message: 'Accessed denied' });
//     }
// }

module.exports = studentRoute