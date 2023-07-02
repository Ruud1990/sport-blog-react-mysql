import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Post = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2];

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
       const res = await axios.get(`/posts/${postId}`)
       setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);
  
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate('/');
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className='singlePost'>
      <div className='content'>
        <img src={post?.img} alt=''></img>
        <div className='user'>
          {post.userImg && <img src={post.userImg} alt=''></img>}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (<div className='edit'>
            <Link to={`/write/edit=2`}>
              <img src={Edit} alt='edit icon'></img>
            </Link>
              <img onClick={handleDelete} src={Delete} alt='delete icon'></img>
          </div>)}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Post