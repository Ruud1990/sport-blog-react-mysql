import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);
  //   const posts = [
  //   {
  //     id: 1,
  //     title: 'lorem ipsum',
  //     desc: 'lorem ipsum',
  //     img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
  //   },
  //   {
  //     id: 2,
  //     title: 'lorem ipsum',
  //     desc: 'lorem ipsum',
  //     img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
  //   },
  //   {
  //     id: 3,
  //     title: 'lorem ipsum',
  //     desc: 'lorem ipsum',
  //     img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
  //   },
  //   {
  //     id: 4,
  //     title: 'lorem ipsum',
  //     desc: 'lorem ipsum',
  //     img: 'https://media.istockphoto.com/id/608516034/pl/zdj%C4%99cie/koncepcja-fitness-i-treningu-wellness.jpg?s=2048x2048&w=is&k=20&c=PkgLkngAYhfNTP6OpFG4tYSbsq8ne7zAJ6Bh4ECVDNg='
  //   }
  // ]
  return (
    <div className='menu'>
        <h1>Other post You may like</h1>
        {posts.map((post) => (
            <div className='post' key={post.id}>
            <img src={post.img} alt='post'></img>
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu