import { useEffect, useState } from "react";
import Anime from "../components/Anime/Anime";
import { getCharacters } from "../api";
import "./Characters.css";
import Main from "../components/Main/Main";

const Characters = () => {
  const [characters, seCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => {
      seCharacters(res.data);
    });
  });

  console.log(characters);

  return (
    <Main>
      <section className="character-cards">
        {characters.map((character) => {
          return (
            <Anime
              key={character.mal_id}
              image={character.images.jpg.image_url}
              title={character.name}
              // genres={anime.genres.map((g) => g.name + ", ")}
            />
          );
        })}
        {/* <AddAnimeForm onAddAnime={(data) => setAnimes([...animes, data])} /> */}
      </section>
    </Main>
  );
};

export default Characters;
