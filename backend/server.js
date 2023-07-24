const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// TMDb API Configuration
const TMDB_API_KEY = 'b4751b4b15114a31071bb7da91115784';
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';

app.get('/', (req, res) => {
  res.send('Welcome to the Movie Search API!');
});
// Search movies route
app.get('/api/movies/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${TMDB_API_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query,
      },
    });
    const movies = response.data.results;
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies', error);
    res.status(500).json({ message: 'Error fetching movies' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
