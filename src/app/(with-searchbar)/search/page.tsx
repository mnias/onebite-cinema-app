import { MovieData } from "@/app/types";
import movie from "@/app/dummy.json";
import MovieItem from "@/app/components/common/movie-item";
import style from './search.module.css'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  let searchedMovies: MovieData[] = [];
  if (q) {
    searchedMovies = movie.filter((m) =>
      m.title.toLowerCase().includes(q.toLowerCase())
    );
  }

  return (
    <section>
      <div className={style.search_container}>
        {searchedMovies.map((movie) => {
          return <MovieItem key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );

  return <div>Search: {q}</div>;
}
