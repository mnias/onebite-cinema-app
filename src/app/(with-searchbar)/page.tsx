import AllMovie from "../components/all-movie/all-movie";
import RecommendMovie from "../components/recommend-movie/recommend-movie";
import { MovieData } from "../types";

async function getAllMovie(): Promise<MovieData[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie`, {
    cache: "force-cache",
  });
  const allMovie: MovieData[] = await response.json();
  return allMovie;
}

async function getRecoMovie(): Promise<MovieData[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/random`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const recoMovie: MovieData[] = await response.json();
  return recoMovie;
}

export default async function Home() {
  const allMovie: MovieData[] = await getAllMovie();
  const recoMovie: MovieData[] = await getRecoMovie();

  return (
    <>
      <RecommendMovie recoMovie={recoMovie} />
      <AllMovie allMovie={allMovie} />
    </>
  );
}
