import Menu from "../Menu/Menu";
import "./MovieTile.scss";
import PropTypes from "prop-types";

export const movieTileActions = ["edit", "delete"];

export default function MovieTile({
  imgSrc,
  title,
  year,
  genres,
  onItemSelect,
}) {
  return (
    <div className="card movie-tile montserrat-font bg-color-black rounded-0 color-white m-0">
      <img
        data-testid="poster"
        className="card-img-top movie-tile__image"
        alt={title}
        src={imgSrc}
      />
      <Menu
        className="position-absolute movie-tile__menu"
        hideArrow={true}
        menuButtonName={<i className="bi bi-three-dots-vertical m-auto"></i>}
        menuItemClasses="text-capitalize"
        menuButtonClasses="bg-color-black rounded-circle p-0 square-button movie-tile__menu-button"
        menuActions={movieTileActions}
        onItemSelect={(item) => onItemSelect(title, item)}
      />
      <div className="card-body px-0 o-70 movie-tile__body">
        <div className="row justify-content-between my-2">
          <div
            data-testid="title"
            className="col o-70  color-white text-capitalize fw-bold movie-tile__title"
          >
            {title}
          </div>
          <div className="col-auto">
            <div className="badge bg-color-black color-white border fw-normal movie-tile__badge ">
              <span data-testid="year" className="movie-tile__year o-70">
                {" "}
                {year}{" "}
              </span>
            </div>
          </div>
        </div>
        <div
          data-testid="genres"
          className="row my-2 fw-bold color-white o-50 movie-tile__genre"
        >
          <span>{genres}</span>
        </div>
      </div>
    </div>
  );
}

MovieTile.propTypes = {
  /**
   * link to image source
   */
  imgSrc: PropTypes.string.isRequired,
  /**
   * Movie title
   */
  title: PropTypes.string.isRequired,
  /**
   * The year of the movie premier
   */
  year: PropTypes.number.isRequired,
  /**
   * Movie genres
   */
  genres: PropTypes.string.isRequired,
  /**
   * Handler which @param title and @param action to handle 'edit' or 'delete' movie
   */
  onItemSelect: PropTypes.func.isRequired,
};
