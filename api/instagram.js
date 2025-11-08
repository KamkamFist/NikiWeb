export default async function handler(req, res) {
  const username = 'kicia.projects';
  const APIFY_TOKEN = process.env.APIFY_TOKEN; // Twój token Apify

  try {
    const response = await fetch(
      `https://api.apify.com/v2/acts/apify~instagram-scraper/run-sync-get-dataset-items?token=${APIFY_TOKEN}&username=${username}&limit=10`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Błąd pobierania danych:', error);
    res.status(500).json({ error: 'Błąd pobierania danych' });
  }
}
