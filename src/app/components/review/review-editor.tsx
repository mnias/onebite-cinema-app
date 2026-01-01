import style from "./review-editor.module.css";
import { createReviewAction } from "@/app/actions/create-review.action";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section>
      <form className={style.form_container} action={createReviewAction}>
        <input name="movieId" value={movieId} hidden readOnly />
        <textarea name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
