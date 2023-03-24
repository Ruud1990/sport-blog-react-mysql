import React from 'react';
import {Link} from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';

const Post = () => {
  return (
    <div className='singlePost'>
      <div className='content'>
        <img src='https://i.pinimg.com/564x/e7/a4/b8/e7a4b8bd91847437d265b34cf08300f3.jpg' alt=''></img>
        <div className='user'>
          <img src='https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg' alt=''></img>
          <div className='info'>
            <span>Joe</span>
            <p>Posted 3 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write/edit=2`}>
              <img src={Edit} alt='edit icon'></img>
            </Link>
              <img src={Delete} alt='delete icon'></img>
          </div>
        </div>
        <h1>Lorem title</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1 lorem ipsum dolor sit amet, consectetur adipis1</p>
      </div>
      <Menu />
    </div>
  )
}

export default Post