import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// 'https://developers.themoviedb.org/3/';
const API_KEY = '42e613f40441be886da012f8e3d90124';

export default async function getTrendingMovies() {
  try {
    const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;
    const result = await axios.get(url);
    // console.log(result);
    console.log(result.data.results);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }

  // return axios
  // .get(url)
  // .then(result=>{
  //     console.log(result);
  //     return result;
  // })}
  // .catch(err=>{console.log(err)});
}
export async function getMovieDetails(id) {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    const movieData = await axios.get(url);
    console.log(movieData.data);
    return movieData.data;
  } catch (error) {
    console.log(error);
  }
}
export async function searchMovies(value) {
  try {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${value}`;
    const result = await axios.get(url);
    console.log(result.data.results);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
}
export async function getCast(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
    const result = await axios.get(url);
    console.log(result.data.cast);
    return result.data.cast;
  } catch (error) {
    console.log(error);
  }
}
export async function getReviews(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    const result = await axios.get(url);
    console.log(result);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
}
