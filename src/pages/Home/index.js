import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

// URL DA API: /movie/now_playing?api_key=44703444ffbe473cda45d83242387510&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: "44703444ffbe473cda45d83242387510",
            language: "pt-BR",
            page: 1,
          },
        });
        console.log(response.data.results.slice(0, 10));
        setFilmes(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {/* <h2>Filmes em Exibição</h2> */}
        <ul>
          {filmes.map((filme) => (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                alt={`Poster de ${filme.title}`}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
