export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <div>Search: {searchParams.q}</div>;
}
