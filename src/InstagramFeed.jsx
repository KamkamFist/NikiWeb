import { useEffect, useState } from 'react';

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/instagram')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {posts.map((post, i) => (
        <div key={i}>
          <img src={post.image} alt={post.caption} style={{ width: '200px' }} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}
