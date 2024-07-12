import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDirectorInput = (e) => setDirector(e.target.value);
  const handleIMDBRatingInput = (e) => setIMDBRating(Number(e.target.value));
  const handleOscarsInput = (e) => setHasOscars(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, director, IMDBRating, hasOscars };

    console.log("New Movie: ", newMovie);
    props.addMovie(newMovie);

    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          onChange={handleTitleInput}
          type="text"
          name="title"
          value={title}
        />

        <label>Director:</label>
        <input
          onChange={handleDirectorInput}
          type="text"
          name="director"
          value={director}
        />

        <label>IMDB Rating:</label>
        <input
          onChange={handleIMDBRatingInput}
          type="number"
          name="IMDBRating"
          value={IMDBRating}
        />

        <label>Has Oscars:</label>
        <input
          onChange={handleOscarsInput}
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
        />

        <button type="input">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
