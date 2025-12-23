'use client';
import { MovieData } from "@/app/types";
import { useRouter } from "next/navigation";
import style from "./movie-item.module.css";
// import { useRouter } from "next/router";

export default function MovieItem(movie: MovieData) {
  const router = useRouter();

  const onClickMovie = (id: number) => {
    router.push(`/movie/${id}`);
  };

  return (
    <div
      key={movie.id}
      className={style.book_item_container}
      onClick={() => onClickMovie(movie.id)}
    >
      <img src={movie.posterImgUrl} alt={movie.title} />
    </div>
  );
}
