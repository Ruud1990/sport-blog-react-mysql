import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'lorem ipsum',
      desc: 'lorem ipsum',
      img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
    },
    {
      id: 2,
      title: 'lorem ipsum',
      desc: 'lorem ipsum',
      img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
    },
    {
      id: 3,
      title: 'lorem ipsum',
      desc: 'lorem ipsum',
      img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
    },
    {
      id: 4,
      title: 'lorem ipsum',
      desc: 'lorem ipsum',
      img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
    }
  ]
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
          <div className='img'>
            <img src={post.img} alt='post'></img>
          </div>
          <div className='content'>
            <Link className='link' to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home