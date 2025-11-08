// api/instagram.js
export async function getInstagramPosts(username) {
  const token = import.meta.env.VITE_APIFY_TOKEN;

  const url = `https://api.apify.com/v2/actor-tasks/instagram-scraper/run-sync-get-dataset-items?token=${token}&username=${username}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Błąd API: ${res.status}`);
    }

    const data = await res.json();

    // Zwracamy tylko potrzebne pola: zdjęcie + opis
    return data.map(item => ({
      image: item.imageUrl,
      caption: item.caption || '',
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Endpoint dla Vite
export async function handler(req, res) {
  const username = 'kicia.projects'; // możesz zmienić na dynamiczne, np. req.query.username
  const posts = await getInstagramPosts(username);
  return res.json(posts);
}
