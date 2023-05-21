import "./GenreSelect.scss";

export default function GenreSelect({ genres, selectedGenre, onSelect }) {
  return (
    <nav className="navbar navbar-expand bg-color-gray-2 genre-select">
      <ul className="navbar-nav mr-auto genre-select__genres">
        {genres.map((genre) => (
          <li
            key={genre.id}
            onClick={() => onSelect(genre)}
            className={`nav-item  nav-link text-uppercase color-white px-3  genre-select__genre   ${
              selectedGenre === genre.id ? "active" : ""
            }`}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
