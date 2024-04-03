import { useEffect, useState } from "react";
import "./AnimeCard.css";
import { getAnimes, getDetailAnime } from "../../api";
import AddAnimeForm from "../AddAnimeForm/AddAnimeForm";
import Anime from "../Anime/Anime";

const AnimeCard = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getAnimes().then((res) => {
      setAnimes(res.data);
    });
  }, []);

  return (
    <section className="anime-cards">
      {animes.map((anime) => {
        return (
          <Anime
            key={anime.mal_id}
            image={anime.images.jpg.large_image_url}
            title={anime.title}
            genres={anime.genres.map((g) => g.name + ", ")}
            id={anime.mal_id}
          />
        );
      })}
      <AddAnimeForm onAddAnime={(data) => setAnimes([...animes, data])} />
    </section>
  );
};

export default AnimeCard;
