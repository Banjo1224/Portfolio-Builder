import './App.css';
import React from 'react';
// import axios from 'axios';
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
      profile_pic: null,
    }
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
          <Page />
          <button onClick={e => {
            e.preventDefault();
            console.log('submit');
          }}>submit</button>
      </div>
    );
  }
}

export default App;
