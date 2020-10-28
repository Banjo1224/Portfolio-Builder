import React, { useRef, useState } from 'react';
import axios from 'axios';

function ProjectUpload(props) {
  const [file, setFile] = useState(''); // storing the uploaded file
  // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });

  const el = useRef(); // accesing input element

  const handleChange = (e) => {

    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
  }

  const uploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData(); formData.append('file', file);
    axios.post(`http://localhost:1337/upload/project/${props.project_id}`, formData, {})
      .then(res => {
      console.log(res);
      getFile({
        name: res.data.name,
        path: 'http://localhost:1337' + res.data.path
      })
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <div className="file-upload">
        <input type="file" ref={el} onChange={handleChange} />
        </div>
        <button onClick={uploadFile} className="upbutton">
        Upload
        </button>
        <hr />
        {/* displaying received image*/}
        {data.path && <img src={data.path} alt={data.name} />}
    </div>
  );
}
export default ProjectUpload;