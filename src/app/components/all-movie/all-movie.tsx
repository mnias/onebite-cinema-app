// import { MovieData } from "@/app/types";
import MovieItem from "../common/movie-item";
import style from "./all-movie.module.css";
import movie from "@/app/dummy.json";

export default function AllMovie() {
  return (
    <section>
      <div className={style.all_movie_container}>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movie_list}>
          {movie.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
