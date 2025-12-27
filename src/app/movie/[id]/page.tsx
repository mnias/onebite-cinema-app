import style from "./movie-detail.module.css";

const getMmovie = async (movieId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}`,
    {
      cache: "force-cache",
    }
  );
  const movieData = await response.json();
  return movieData;
};

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id: movieId } = await params;

  const movieData = await getMmovie(`${movieId}`);

  if (movieData) {
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

  return <div>없는 영화에요.</div>;
}
