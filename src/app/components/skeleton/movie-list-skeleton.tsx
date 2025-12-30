import MovieItemSkeleton from "./movie-item-skeleton";

type MovieItemListSkeletonProps = {
  rows: number; // 세로 줄 개수
  columns: number; // 가로 개수
};

export default function MovieItemListSkeleton({
  rows,
  columns,
}: MovieItemListSkeletonProps) {
  const total = rows * columns;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 8,
      }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <MovieItemSkeleton key={index} />
      ))}
    </div>
  );
}
