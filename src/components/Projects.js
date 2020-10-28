import React from 'react';
import ProjectList from './ProjectList.js';
import FileUpload from './projectUpload.js'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: null,
      projects: [],
      name: null,
      link: null,

    }
    this.setName = this.setName.bind(this);
    this.setLink = this.setLink.bind(this);
    this.setImage = this.setImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setName(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    })
  }

  setLink(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      link: e.target.value
    })
  }

  setImage(e) {
    e.preventDefault()
    console.log(e.target);
    this.setState({
      picture: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    var newProj = {'name': this.state.name, 'link': this.state.link, 'picture': this.state.picture}
    this.setState({
      projects: this.state.projects.concat(newProj)
    })
  }

  // onDrop(pictureFiles, pictureDataURLs) {
  //   console.log(arguments)
  //   this.setState({
  //     picture: URL.createObjectURL(pictureFiles),
  //   }, () => console.log(this.state));

  // }

  render() {
    return (
      <div id='projects'>
        <h2>Projects</h2>
        <label>Project Name: </label><input placeholder='Name' onChange={e => this.setName(e)}/><br />
        <label>Project Link: </label><input placeholder='Github URL' onChange={e => this.setLink(e)}/><br />
        <label>Project Image: </label><FileUpload project_id={this.state.projects.length + 1}/>
        <button onClick={e => this.handleSubmit(e)}>Add Project to List</button>
        {this.state.projects.length ? <ProjectList projects={this.state.projects} /> : null}
        <hr />
      </div>
    )
  }
}
/**
* input as many projects as you want
*  input project name
*  upload project picture
*/
export default Projects;