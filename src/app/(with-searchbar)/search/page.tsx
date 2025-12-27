import { MovieData } from "@/app/types";
import MovieItem from "@/app/components/common/movie-item";
import style from "./search.module.css";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getSearchedMovies = async (query: string): Promise<MovieData[]> => {
  try {
    await delay(5000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/search?q=${query}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      throw new Error("영화 검색에 실패했습니다");
    }

    const searchedMovies: MovieData[] = await response.json();
    return searchedMovies;
  } catch (error) {
    console.error("영화 검색 중 오류 발생:", error);
    throw error;
  }
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  let searchedMovies: MovieData[] = [];
  let hasError = false;

  if (q) {
    try {
      searchedMovies = await getSearchedMovies(q);
    } catch (error) {
      hasError = true;
      console.error(error);
    }
  }

  if (hasError) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "#ff4444" }}>
        에러가 발생했습니다
      </div>
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
}
