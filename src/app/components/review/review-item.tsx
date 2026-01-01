import { ReviewData } from "../../types";
import style from "./review-item.module.css";

export default function ReviewItem({
  author,
  content,
  createdAt,
  id,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.author_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
      </div>
      <div className={style.content}>{content}</div>

      <div className={style.delete_btn}>리뷰 삭제하기</div>
    </div>
  );
}
