import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type='text' placeholder=""></input>
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
          <input style={{display: 'none'}} type="file" id='file' name=''></input>
          <label className='file' htmlFor='file'>Upload image</label>
          <div className='buttons'>
            <button>Save as draft</button>
            <button>Edit</button>
          </div>
        </div>
        <div className="menu-item">
          <h1>Category</h1>
          <div className="category">

          <input type='radio' name='category' value='football' id='football'/>
          <label htmlFor='football'>Football</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='basketball' id='basketball'></input>
          <label htmlFor='football'>Basketball</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='Volleyball' id='Volleyball'></input>
          <label htmlFor='Volleyball'>Volleyball</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='Winter sports' id='Winter sports'></input>
          <label htmlFor='Winter sports'>Winter sports</label>
          </div>
           <div className="category">
            
          <input type='radio' name='category' value='Other' id='Other'></input>
          <label htmlFor='football'>Other</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write