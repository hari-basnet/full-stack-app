import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import StudentList from './components/StudentList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar';
import StudentDetail from './components/StudentDetail';
import LandingPage from './components/Index'
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="container" >
          <h1>Mern stack app</h1>
          {/* <AddStudent />
          <EditStudent />
          <StudentList /> */}
          <Navbar />
          <Switch>
            <Route path="/add-student" component={AddStudent} />
            <Route path="/edit/:id" component={EditStudent} />
            <Route path="/students/:id" component={StudentDetail} />
            <Route path="/students" component={StudentList} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
