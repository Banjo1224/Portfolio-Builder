// import { Grid } from '@material-ui/core';
import FileUpload from './profileUpload.js';

const Profile = (props) => {
  /**
   * upload profile pic - required
   * input name - required
   * input professional summary - required
   * input Google Doc link to resume - required
   * input Email - required
   * input Github - optional
   * input LinkedIn - optional
   */
  return (
    <div id='profile'>
      <h2>Profile</h2>
      <form id='profileForm'>
        <label>Name: </label>
        <input placeholder='Name' onChange={(e) => { console.log(e.target.value) }}></input><br />
        <label>Professional Summary: </label><br></br>
        <textarea onChange={(e) => { console.log(e.target.value) }}></textarea><br />
        <label>Email: </label>
        <input placeholder='Email' type='email' onChange={(e) => { console.log(e.target.value) }}></input><br />
        <label>LinkedIn: </label>
        <input placeholder='Link to LinkedIn' onChange={e => { console.log(e.target.value) }}></input><br />
        <label>Github: </label
        ><input placeholder='Link to Github' onChange={e => { console.log(e.target.value) }}></input><br />
        <label>Resume: </label>
        <input placeholder='Link to Google Doc Resume' onChange={e => { console.log(e.target.value) }}></input><br />
        <FileUpload />
      </form>
      <hr></hr>
    </div>
  )
}

export default Profile;