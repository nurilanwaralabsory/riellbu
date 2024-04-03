import { useState } from "react";
import "./AddAnimeForm.css";

const AddAnimeForm = ({ onAddAnime }) => {
  const [formData, setFormData] = useState({
    title: "",
    images: "",
    genres: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      title: name === "title" ? value : prevFormData.title,
      images: {
        ...prevFormData.images,
        jpg: {
          ...prevFormData.images.jpg,
          [name]: value,
        },
      },
      genres: [
        {
          name: value,
        },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAnime(formData);
  };

  return (
    <div className="form-container">
      <h1 style={{ marginBottom: "10px" }}>Add Anime Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="large_image_url"
            placeholder="Enter image"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genres"
            placeholder="Enter genre"
            onChange={handleChange}
          />
        </div>
        <button>Tambah data</button>
      </form>
    </div>
  );
};

export default AddAnimeForm;
