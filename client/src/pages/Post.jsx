import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Post = () => {
  const [post, setPost] = useState({});

  const location = useLocation()

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
  return (
    <div className='singlePost'>
      <div className='content'>
        <img src={post?.img} alt=''></img>
        <div className='user'>
          <img src='https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg' alt=''></img>
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment.HTML5_FMT(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (<div className='edit'>
            <Link to={`/write/edit=2`}>
              <img src={Edit} alt='edit icon'></img>
            </Link>
              <img src={Delete} alt='delete icon'></img>
          </div>)}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  )
}

export default Post