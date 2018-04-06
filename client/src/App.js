import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => {
        this.setState({ projects: res.data });
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.projects.map(project => (
          <Button color="primary">{project.name}</Button>
        ))}
      </div>
    );
  }
}

export default App;
