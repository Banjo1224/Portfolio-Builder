import React from 'react';
import ProjectList from './ProjectList.js';
import ImageUploader from 'react-images-upload';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: 0,
      pictures: []
    }
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
      projects: this.state.projects + 1
    }, () => console.log(this.state));

  }

  render() {
    return (
      <div id='projects'>
        <h2>Projects</h2>
        <label>Project Name: </label><input placeholder='Name'></input><br />
        <label>Project Link: </label><input placeholder='Github URL'></input><br />
        <ImageUploader
          withIcon={true}
          buttonText="Choose image"
          onChange={this.onDrop.bind(this)}
          imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage={true}
          withPreview={true}
          id="uploader"
        />
        <button onClick={e => e.preventDefault()}>Add Project to List</button>
        {this.state.pictures.length ? <ProjectList pictures={this.state.pictures} /> : null}
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