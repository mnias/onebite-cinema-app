import AllMovie from "../components/all-movie/all-movie";
import RecommendMovie from "../components/recommend-movie/recommend-movie";

export default function Home() {
  return (
    <>
      <RecommendMovie />
      <AllMovie />
    </>
  );
}
