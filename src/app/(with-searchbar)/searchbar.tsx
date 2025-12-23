"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import style from './searchbar.module.css';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = React.useState("");

  const q = searchParams.get("q") || "";

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  React.useEffect(() => {
    setSearch(q);
  }, [q]);

  return (
    <div className={style.searchbar_container}>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
