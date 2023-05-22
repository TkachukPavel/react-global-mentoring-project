import "./App.css";
import Counter from "./Counter/Counter";
import GenreSelect from "./GenreSelect/GenreSelect";
import Search from "./Search/Search";
import { genres } from "./data";

function App() {
  return (
    <>
      <div className="container App">
        <div className="row my-3">
          <div className="row">
            <h2>Counter component</h2>
          </div>
          <div className="row">
            <div className="col">
              <Counter initValue={42} />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="row">
            <h2> Search Component</h2>
          </div>
          <div className="row my-2">
            <Search
              initQuery="B Movie"
              onSearch={(query) => alert(query)}
            ></Search>
          </div>
        </div>
        <div className="row my-3">
          <div className="row">
            <h2> Genre Select</h2>
          </div>
          <div className="row my-2">
            <GenreSelect
              genres={genres}
              selectedGenre={genres[0]}
              onSelect={(genre) => {
                alert(`${genre} selected!`);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
