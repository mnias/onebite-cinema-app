import { MovieData } from "@/app/types";
import style from "./all-movie.module.css";
import MovieItem from "../common/movie-item";

export default function AllMovie({ allMovie }: { allMovie: MovieData[] }) {
  return (
    <section>
      <div className={style.all_movie_container}>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movie_list}>
          {allMovie.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
