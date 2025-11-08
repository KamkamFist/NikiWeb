import { useEffect, useState } from 'react';

function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/instagram')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Błąd pobierania postów:', err));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Instagram feed</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '30px' }}>
          <img
            src={post.media_url}
            alt={post.caption}
            style={{
              width: '300px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
          />
          <p>{post.caption}</p>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            Zobacz na Instagramie
          </a>
        </div>
      ))}
    </div>
  );
}

export default InstagramFeed;