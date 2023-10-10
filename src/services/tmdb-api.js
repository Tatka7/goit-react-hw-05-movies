import axios from 'axios';

const KEY = 'api_key=1357bc37ddaee2f58cfd771d3ad71162';
const URL = 'https://api.themoviedb.org/3/';

export async function fetchTrending() {
  const REQ_URL = `${URL}trending/movie/day?${KEY}`;
  const response = await axios.get(REQ_URL);
  return response;
}
