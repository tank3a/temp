import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import styles from "./Home.module.css";
import loadingGif from "../img/Infinity-2.6s-321px.gif";

function Detail() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, [])
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <img src={loadingGif} />
        </div>
      ) : (
        <div> {
          <DetailMovie
            key={detail.id}
            medium_cover_image={detail.medium_cover_image}
            title_long={detail.title_long}
            runtime={detail.runtime}
            rating={detail.rating}
            genres={detail.genres}
            description_full={detail.description_full}
            genres={detail.genres} />
        }
        </div>
      )}
    </div >
  )
}

export default Detail;