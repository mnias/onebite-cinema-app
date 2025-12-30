import { MovieData } from "@/app/types";
import MovieItem from "@/app/components/common/movie-item";
import style from "./search.module.css";
import { JSX, Suspense } from "react";
import { delay } from "@/lib/delay";

async function SearchResultMovies({
  query,
}: {
  query: string;
}): Promise<JSX.Element> {
  // try {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/search?q=${query}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "#ff4444" }}>
        에러가 발생했습니다
      </div>
    );
  }

  const searchedMovies: MovieData[] = await response.json();
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

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  // if (q) {
  //   try {
  //     searchedMovies = await SearchResultMovies(q);
  //   } catch (error) {
  //     hasError = true;
  //     console.error(error);
  //   }
  // }

  return (
    <Suspense key={q || ""} fallback={<div>검색 결과를 불러오는 중...</div>}>
      <SearchResultMovies query={q || ""} />
    </Suspense>
  );
}
