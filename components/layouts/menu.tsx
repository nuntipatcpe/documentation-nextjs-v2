import Link from "next/link";
import React from "react";

type Props = {};

export default function Menu({}: Props) {
  return (
    <div className="menu">
      <Link href={"/howToUse"}>
        <a href="">How to Create file Markdown ?</a>
      </Link>
      <br />
    </div>
  );
}
