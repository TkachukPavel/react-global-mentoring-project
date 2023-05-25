import "./MovieDetails.scss";
import PropTypes from "prop-types";

export default function MovieDetails({
  imgSrc,
  title,
  year,
  genres,
  description,
  duration,
  score,
}) {
  return (
    <div className="row movie-details montserrat-font">
      <div className="col-auto mx-auto mb-4 movie-details__poster">
        <img
          data-testid="poster"
          alt={title}
          width={323}
          height={486}
          src={imgSrc}
        ></img>
      </div>
      <div className="col-md col-auto">
        <div className="row color-white align-items-center fw-light mb-2">
          <div
            data-testid="title"
            className="col-auto movie-details__title text-uppercase"
          >
            {title}
          </div>
          <div className="col-auto">
            <div
              data-testid="score"
              className="rounded-circle border p-2 w-content movie-details__score"
            >
              {score}
            </div>
          </div>
        </div>
        <div className="row color-white fw-bold mb-4">
          <div
            data-testid="genres"
            className="col movie-details__genres o-50 fw-bold"
          >
            {genres}
          </div>
        </div>
        <div className="row color-red mb-4 fw-light">
          <div
            data-testid="year"
            className="col-auto movie-details__year me-5 fw-light"
          >
            {year}
          </div>
          <div
            data-testid="duration"
            className="col-auto movie-details__duration"
          >
            {duration}
          </div>
        </div>
        <div className="row fw-light color-white">
          <div
            data-testid="description"
            className="col movie-details__description o-50"
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  /**
   * Link to image source
   */
  imgSrc: PropTypes.string.isRequired,
  /**
   * Movie Title
   */
  title: PropTypes.string.isRequired,
  /**
   * The year of movie premier
   */
  year: PropTypes.number.isRequired,
  /**
   * Movie genres
   */
  genres: PropTypes.string.isRequired,
  /**
   * Movie description
   */
  description: PropTypes.string.isRequired,
  /**
   * Movie duration
   */
  duration: PropTypes.string.isRequired,
  /**
   * Movie score
   */
  score: PropTypes.number.isRequired,
};
