require('dotenv').config();
const express = require('express');
const app = express();
const studentRoute = require('./server/routes/student-routes')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log('Server is connected to MongoDB Database')
})

// t0 communicate between ports we need cors 
const cors = require('cors');

app.use(cors());

// port is capital because it is constant value
const PORT = process.env.PORT || 5000;

// this is directing to home route. without it doesnot work
// anything with use is a middleware
app.use(express.json())
app.use('/api/v1.0', studentRoute);

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})