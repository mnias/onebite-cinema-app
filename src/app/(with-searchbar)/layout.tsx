import SearchBar from "./searchbar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
