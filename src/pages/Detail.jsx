import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailAnime } from "../api";
import AnimeCard from "../components/AnimeCard/AnimeCard";
import Main from "../components/Main/Main";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();

  const [detailAnime, setDetailAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetailAnime(id);
        setDetailAnime(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Main>
        <div className="detail-container">
          <div className="left">
            {detailAnime.images && (
              <img
                src={detailAnime.images.jpg.large_image_url}
                alt="img-anime"
                className="img-anime"
              />
            )}
            <div className="detail-content">
              <h1>
                {detailAnime.title}
                <span className="watch-online">/watch online</span>
              </h1>
              <p>
                Duration: <span className="data">{detailAnime.duration}</span>
              </p>
              <p>
                Directed by:{" "}
                {detailAnime.studios && (
                  <span className="data">
                    {detailAnime.studios.map((s) => s.name)}
                  </span>
                )}
              </p>
              {detailAnime.score && (
                <p>
                  Rating: <span className="data">{detailAnime.score}</span>
                </p>
              )}
              {detailAnime.genres && (
                <p>
                  Genre:{" "}
                  <span className="data">
                    {detailAnime.genres.map((g) => g.name + ", ")}
                  </span>
                </p>
              )}
              {detailAnime.status && (
                <p>
                  Status:
                  <span className="data"> {detailAnime.status}</span>
                </p>
              )}
            </div>
          </div>
          <div className="right">
            <div className="anime-description">
              <h1>Anime description:</h1>
              <p>{detailAnime.synopsis}</p>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Detail;
