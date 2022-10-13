import { searchSelector } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Menubar({}: Props) {
  const { menubarTitle } = useSelector(searchSelector);

  return (
    <div className="menubar">
      <div className="img">
        <span className="logo">Logo</span>
      </div>
      <ul>
        {menubarTitle.map((e) => (
          <Link href="/">
            <a href="">{e}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
}
