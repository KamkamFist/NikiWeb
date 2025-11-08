export default async function handler(req, res) {
  const token = process.env.APIFY_TOKEN; // token w Vercel Environment Variables
  const username = 'kicia.projects';

  try {
    const r = await fetch(`https://api.apify.com/v2/actor-tasks/instagram-scraper/run-sync-get-dataset-items?token=${token}&username=${username}`);
    
    if (!r.ok) {
      throw new Error(`Apify returned status ${r.status}`);
    }

    const data = await r.json();

    // mapujemy tylko potrzebne dane
    const posts = data.map(item => ({
      image: item.imageUrl,
      caption: item.caption || ''
    }));

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch Instagram posts' });
  }
}