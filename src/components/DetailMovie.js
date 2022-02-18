import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function DetailMovie({ medium_cover_image, title_long, runtime, rating, genres, description_full }) {
  return (
    <div>
      <div>
        <nav className={styles.navbar}><Link to="/movieReactApp">Home</Link></nav>
      </div>
      <div className={styles.movie}>
        <img src={medium_cover_image} alt={title_long} />
        <div className={styles.container}>
          <h1 className={styles.movie__title}>{title_long}</h1>
          <div className={styles.movie__details}>
            <span>runtime: {runtime} min</span>
            <span>rating: {rating} point</span>
            <span>genres: {genres.map((g) => <span key={g}>  {g} </span>)}</span>
          </div>
          <hr />
          <h3>Description</h3>
          <p>{description_full}</p>
        </div>
      </div>
    </div>
  )
}

DetailMovie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description_full: PropTypes.string.isRequired,
}

export default DetailMovie;