// InstagramFeed.jsx
import { useEffect, useState } from 'react';

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/instagram')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Błąd pobierania danych:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Ładowanie postów...</p>;
  if (!posts.length) return <p>Brak postów do wyświetlenia.</p>;

  return (
    <div
      className="instagram-feed"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '15px',
      }}
    >
      {posts.map((post, index) => (
        <div key={index} className="instagram-post" style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <img
            src={post.imageUrl}
            alt={post.caption}
            style={{ width: '100%', display: 'block' }}
          />
          {post.caption && (
            <p style={{ padding: '10px', fontSize: '14px', lineHeight: '1.4' }}>
              {post.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
