import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import StudentList from './components/StudentList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar';
import StudentDetail from './components/StudentDetail';


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
            <Route path="/" component={StudentList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
