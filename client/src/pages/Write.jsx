import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const Write = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState('');


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('img', img);
      const res = await axios.post('upload', formData)
      return res.data
    } catch (err) {
      console.log(err);
    }
  }

  const handleAdd = async e=> {
    e.preventDefault();
    const imgUrl = upload();
    try {
      
    } catch (err) {
      console.log(err);
    }
  }


  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type='text' placeholder="Title" onChange={e=>setTitle(e.target.value)}></input>
        <div className="editor-container">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="menu-item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: 'none'}} type="file" id='file' name='' onChange={e=>setImg(e.target.files[0])}></input>
          <label className='file' htmlFor='file'>Upload image</label>
          <div className='buttons'>
            <button>Save as draft</button>
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>
        <div className="menu-item">
          <h1>Category</h1>
          <div className="category">

          <input type='radio' name='category' value='football' id='football' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor='football'>Football</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='basketball' id='basketball' onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor='football'>Basketball</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='Volleyball' id='Volleyball' onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor='Volleyball'>Volleyball</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='Winter sports' id='Winter sports' onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor='Winter sports'>Winter sports</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='Other' id='Other' onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor='football'>Other</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write