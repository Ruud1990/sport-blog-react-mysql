import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

   const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
          <div className='img'>
            <img src={`../upload/${post.img}`} alt='post'></img>
          </div>
          <div className='content'>
            <Link className='link' to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
              <p>{getText(post.desc)}</p>
              <button>Read more</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home