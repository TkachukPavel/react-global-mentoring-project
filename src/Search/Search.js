import "./Search.scss";
import { useState } from "react";

export default function Search({ initQuery = "", onSearch }) {
  const [query, setQuery] = useState(initQuery);

  function handleSearch(query) {
    onSearch(query);
    setQuery("");
  }

  return (
    <div className="row search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What do you want to watch?"
        type="text"
        onKeyDown={(e) => e.code === "Enter" && handleSearch(query)}
        className={`bg-black ${
          query ? "color-white" : "color-gray-1"
        } py-3 ps-4 col search__input`}
        data-testid="search-input"
      />
      <button
        className="btn btn-lg bg-color-red color-white ms-3 py-3 px-5 col-auto"
        onClick={() => {
          handleSearch(query);
        }}
        data-testid="search"
      >
        Search
      </button>
    </div>
  );
}
