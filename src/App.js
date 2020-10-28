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

  handleSubmit() {
    const data = {
      'name': this.state.name,
      'email': this.state.email,
      'resume': this.state.resume,
      'linkedin': this.state.linkedin,
      'github': this.state.description,
      'bg_color': this.state.bg_color,
      'nav_color': this.state.nav_color
    }
    console.log(data);

    // const formData = new FormData(); formData.append('file', this.state);
    axios({
      method: 'post',
      url: 'http://localhost:1337/portfolio',
      data: data})
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err))
  }

  handleProfile(name, email, resume, linkedin, github, description) {
    resume = resume.slice(0, -resume.split('').reverse().join('').indexOf('/')) + 'export?format=pdf';
    this.setState({
      name,
      email,
      resume,
      linkedin,
      github,
      description
    }, () => {
      console.log(this.state)
    });
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
          <Profile handleProfile={this.handleProfile.bind(this)}/>
          <Projects />
          <Page handleProps={this.handlePageProps.bind(this)} />
          <button onClick={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}>Submit Portfolio</button>
      </div>
    );
  }
}

export default App;
