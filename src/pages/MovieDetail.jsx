import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "126eaecb9e99a136fc9b9215313826c7";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieRes = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      const castRes = await axios.get(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
      );
      const videoRes = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
      );

      setMovie(movieRes.data);
      setCast(castRes.data.cast.slice(0, 5));
      const trailerData = videoRes.data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailer(trailerData);
    };

    fetchData();
  }, [id]);

  if (!movie) return <p>Loading Movie ...</p>;

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>{movie.overview}</p>

      <h3>Top Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>

      {trailer && (
        <a
          href={`https://www.youtube.com/watch?v=${trailer.key}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>▶ Watch Trailer</button>
        </a>
      )}

      <a
        href="https://example.com/download/movie.mp4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>⬇ Download Movie</button>
      </a>
    </div>
  );
}

export default MovieDetail;
