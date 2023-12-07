import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/11?api_key=44703444ffbe473cda45d83242387510&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
