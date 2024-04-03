import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { getGenreAnime } from "../api";
import Anime from "../components/Anime/Anime";
import "./Genre.css";
import cover from "../img/cover.jpg";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenreAnime().then((res) => {
      setGenres(res.data);
    });
  });

  return (
    <Main>
      <section className="genre-cards">
        {genres.map((genre) => {
          return (
            <Anime
              key={genre.mal_id}
              title={genre.name}
              genres={`${genre.count} Anime`}
              image={cover}
            />
          );
        })}
      </section>
    </Main>
  );
};

export default Genre;
