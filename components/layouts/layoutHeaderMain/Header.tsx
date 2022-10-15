import { search } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  open: boolean;
};

export default function Header({ open }: Props) {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(search(searchTerm));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <div className={`header ${open && "open"}`}>
      <Link href={"/"}>
        <a className="logo">Documentation v.2</a>
      </Link>
      <input
        type="text"
        placeholder="Serach"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div>
        <Link href={"/howToUse"}>
          <a href="" className="howToUse">
            How to create file Markdown ?
          </a>
        </Link>
        <br />
        <Link href={"/preview"}>
          <a href="" className="howToUse">
            preview
          </a>
        </Link>
      </div>
    </div>
  );
}
