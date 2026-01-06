import { MovieData } from "@/app/types";
import style from "./all-movie.module.css";
import MovieItem from "../common/movie-item";

export default async function AllMovie() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie`);
  const allMovie: MovieData[] = await response.json();

  return (
    <section>
      <div className={style.all_movie_container}>
        <div className={style.all_movie_list}>
          {allMovie.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
