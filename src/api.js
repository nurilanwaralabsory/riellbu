import axios from "axios";

const baseUrl = "https://api.jikan.moe/v4";

export const getAnimes = async () => {
  const response = await axios.get(`${baseUrl}/top/anime`);
  return response.data;
};

export const getDetailAnime = async (id) => {
  const response = await axios.get(`${baseUrl}/anime/${id}`);
  return response.data;
};

export const getCharacters = async () => {
  const response = await axios.get(`${baseUrl}/top/characters?limit=25`);
  return response.data;
};

export const getGenreAnime = async () => {
  const response = await axios.get(`${baseUrl}/genres/anime`);
  return response.data;
};
