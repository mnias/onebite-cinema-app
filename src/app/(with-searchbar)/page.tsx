import { Suspense } from "react";
import AllMovie from "../components/all-movie/all-movie";
import RecommendMovie from "../components/recommend-movie/recommend-movie";
import MovieItemListSkeleton from "../components/skeleton/movie-list-skeleton";

export default async function Home() {
  return (
    <>
      <h3>지금 가장 추천하는 영화</h3>
      <Suspense fallback={<MovieItemListSkeleton rows={1} columns={3} />}>
        <RecommendMovie />
      </Suspense>
      <h3>등록된 모든 영화</h3>
      <Suspense fallback={<MovieItemListSkeleton rows={3} columns={5} />}>
        <AllMovie />
      </Suspense>
    </>
  );
}
