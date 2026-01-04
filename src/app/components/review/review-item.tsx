import { ReviewData } from "../../types";
import ReviewItem1DeleteButton from "./review-item-delete-button";
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

      <div className={style.delete_btn}>
        <ReviewItem1DeleteButton reviewId={id} movieId={movieId} />
      </div>
    </div>
  );
}
