import './App.css';
import React from 'react';
import axios from 'axios';
import Profile from './components/Profile.js';
import Projects from './components/Projects.js';
import Page from './components/Page.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      resume: null,
      linkedin: null,
      github: null,
      description: null,
      bg_color: null,
      nav_color: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const file = {
      "name": this.state.name,
      "email": this.state.email,
      "resume": this.state.resume,
      "linkedin": this.state.linkedin,
      "github": this.state.github,
      "description": this.state.description
    };
    axios.post('http://localhost:1337/upload/portfolio', file)
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err))
  }

  handleProfile(name, email, resume, linkedin, github, description) {
    resume = resume.slice('').reverse().indexOf('/')
    this.setState({
      name,
      email,
      resume,
      linkedin,
      github,
      description
    })
  }

  handlePageProps(pageColor, navColor) {
    this.setState({
      bg_color: pageColor,
      nav_color: navColor
    }, () => {
      // console.log(this.state.bg_color, this.state.nav_color)
    })
  }

  render() {
    return (
      <div className="App">
        <header class="App-header">
          <h1>Portfolio Builder - Software Engineering</h1>
          <p id='description'>Welcome to the Software Engineering Portfolio Generator. Use this page to create a simple Vue.JS portfolio page ready to deploy!</p>
        </header>
          <Profile />
          <Projects />
          <Page handleProps={this.handlePageProps.bind(this)} />
          <button onClick={e => {
            e.preventDefault();
            this.handleSubmit(e)
          }}>Submit Portfolio</button>
      </div>
    );
  }
}

export default App;
