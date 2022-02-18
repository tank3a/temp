import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, medium_cover_image, title_long, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} alt={title_long} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h2>
      <ul className={styles.movie__genres}>
        {genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
      <p>{summary.length > 320 ? `${summary.slice(0, 320)}...` : summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;