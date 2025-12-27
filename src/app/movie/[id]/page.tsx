import { MovieData } from "@/app/types";
import style from "./movie-detail.module.css";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
  ];
}

const getMovie = async (movieId: string): Promise<MovieData> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}`,
      {
        cache: "force-cache",
      }
    );
    const movieData = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return movieData;
  } catch (err) {
    throw err;
  }
};

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id: movieId } = await params;
  let movieData: MovieData | null = null;

  try {
    movieData = await getMovie(`${movieId}`);
  } catch (err) {
    console.error("Movie fetch error:", err);
    notFound();
  }

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${movieData.posterImgUrl}')` }}
      >
        <img src={movieData.posterImgUrl} />
      </div>
      <div className={style.title}>{movieData.title}</div>
      <div>
        {movieData.releaseDate} / {movieData.genres} /{" "}
        {`${movieData.runtime}분`}
      </div>
      <div>{movieData.company}</div>
      <div className={style.sub_title}>{movieData.subTitle}</div>
      <div className={style.description}>{movieData.description}</div>
    </div>
  );
}
