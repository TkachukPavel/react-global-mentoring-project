import { useState } from "react";
import "./GenreSelect.scss";

export default function GenreSelect({ genres, selectedGenre, onSelect }) {
  const [currentGenre, setCurrentGenre] = useState(selectedGenre);

  function hanldeSelect(genre) {
    onSelect(genre);
    setCurrentGenre(genre);
  }

  return (
    <nav className="navbar navbar-expand bg-color-gray-2 genre-select">
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
