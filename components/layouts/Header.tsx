import { search } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(search(searchTerm));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <div className="header">
      <Link href={"/"}>
        <a className="logo">Documentation v2</a>
      </Link>
      <span></span>
      <input
        type="text"
        placeholder="Serach"
        // onChange={(e) => dispatch(search(e.target.value))}
        onChange={(e) => setSearchTerm(e.target.value)}
        // value={searchSelector.search}
        value={searchTerm}
      />
    </div>
  );
}
