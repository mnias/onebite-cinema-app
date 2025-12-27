import { Suspense } from "react";
import SearchBar from "./searchbar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
