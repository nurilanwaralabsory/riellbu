import "./Anime.css";
import { NavLink } from "react-router-dom";

const Anime = (props) => {
  const { id, image, title, genres } = props;
  return (
    <div key={id} className="anime-card">
      <img src={image} alt="anime 1" />
      <div className="anime-info">
        <h4>{title}</h4>
        <p>{genres}</p>
        <NavLink to={`/detail/${id}`}>
          <button>View More</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Anime;
