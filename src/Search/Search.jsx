import "./Search.scss";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Search({ initQuery = "", onSearch }) {
  const [query, setQuery] = useState(initQuery);

  function handleSearch(query) {
    onSearch(query);
    setQuery("");
  }

  return (
    <div className="row search montserrat-font flex-nowrap">
      <div className="col">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want to watch?"
          type="text"
          onKeyDown={(e) => e.code === "Enter" && handleSearch(query)}
          className={`bg-black w-100 ${
            query ? "color-white" : "color-gray-1"
          } py-3 ps-4 col search__input`}
          data-testid="search-input"
        />
      </div>
      <div className="col-auto">
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
    </div>
  );
}

Search.propTypes = {
  /**
   * Initial query to search
   */
  initQuery: PropTypes.string,

  /**
   * onSearch handler
   */
  onSearch: PropTypes.func.isRequired,
};
