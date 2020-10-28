// import { Grid } from '@material-ui/core';
import { useState } from 'react';
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
  const [args, addArg] = useState(['', '', '', '', '', '']);

  const updateFieldChanged = index => e => {
    e.preventDefault();
    let newArr = [...args];
    newArr[index] = e.target.value;

    addArg(newArr);
  }

  // console.log(props.handleProfile);

  return (
    <div id='profile'>
      <h2>Profile</h2>
      <form id='profileForm'>
        <label>Name: </label>
        <input placeholder='Name' onChange={updateFieldChanged(0)}></input><br />
        <label>Email: </label>
        <input placeholder='Email' type='email' onChange={updateFieldChanged(1)}></input><br />
        <label>Resume: </label>
        <input placeholder='Link to Google Doc Resume' onChange={updateFieldChanged(2)}></input><br />
        <label>LinkedIn: </label>
        <input placeholder='Link to LinkedIn' onChange={updateFieldChanged(3)}></input><br />
        <label>Github: </label
        ><input placeholder='Link to Github' onChange={updateFieldChanged(4)}></input><br />
        <label>Professional Summary: </label><br></br>
        <textarea onChange={updateFieldChanged(5)}></textarea><br />
        <label>Professional Portait: </label>
        <FileUpload />
        <input type='submit' onClick={(e) => {
          e.preventDefault();
          // console.log(args)
          props.handleProfile(...args)
        }}></input>
      </form>
      <hr></hr>
    </div>
  )
}

export default Profile;