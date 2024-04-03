import "./Main.css";
import AnimeCard from "../AnimeCard/AnimeCard";

const Main = (props) => {
  const { children } = props;
  return <div className="main">{children}</div>;
};

export default Main;
