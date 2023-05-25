import "./GenreSelect.scss";
import { useState } from "react";
import PropTypes from "prop-types";

export default function GenreSelect({ genres, selectedGenre, onSelect }) {
  const [currentGenre, setCurrentGenre] = useState(selectedGenre);

  function hanldeSelect(genre) {
    onSelect(genre);
    setCurrentGenre(genre);
  }

  return (
    <nav className="navbar navbar-expand bg-color-black genre-select montserrat-font">
      <ul className="navbar-nav mr-auto genre-select__genres">
        {genres.map((genre) => (
          <li
            key={genre}
            onClick={() => hanldeSelect(genre)}
            className={`nav-item  nav-link text-uppercase color-white px-3  genre-select__genre   ${
              currentGenre === genre ? "active" : ""
            }`}
            data-testid={genre}
          >
            {genre}
          </li>
        ))}
      </ul>
    </nav>
  );
}

GenreSelect.propTypes = {
  /**
   * List of available genres
   */
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * Pre selected genre
   */
  selectedGenre: PropTypes.string.isRequired,

  /**
   * On genre select handler
   */
  onSelect: PropTypes.func.isRequired,
};
