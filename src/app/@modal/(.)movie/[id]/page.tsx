/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "@/app/components/modal/modal";
import MoviePage from "@/app/movie/[id]/page";

// ()뒤의 경로를 intercept해라 . -> 동일 경로 (..) -> 상위 , (...) -> app 폴더 아래
export default function Page(props: any) {
  return (
    // <Modal>
    //   <MoviePage {...props} />
    // </Modal>
    <div>
      <Modal>
        <MoviePage {...props} />
      </Modal>
    </div>
  );
}
