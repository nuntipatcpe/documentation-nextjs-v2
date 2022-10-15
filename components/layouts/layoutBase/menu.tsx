import Link from "next/link";
import React from "react";

type Props = {};

export default function Menu({}: Props) {
  return (
    <div className="menu">
      <Link href={"/howToUse"}>
        <a href="">How to create file Markdown ?</a>
      </Link>
      <br />
      {/* <Link href={"/preview"}>
        <a href="">preview</a>
      </Link> */}
    </div>
  );
}
