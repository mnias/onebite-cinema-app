import style from "./recommend-movie.module.css";
import MovieItem from "../common/movie-item";
import { MovieData } from "@/app/types";
import { delay } from "@/lib/delay";

export default async function RecommendMovie() {
  await delay(2000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/random`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const recoMovie: MovieData[] = await response.json();

  return (
    <section>
      <div className={style.recommend_movie_container}>
        <div className={style.recommend_movie_list}>
          {recoMovie.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
