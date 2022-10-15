import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function LayoutMarkdown({ children }: Props) {
  return (
    <div className="markdown">
      <div className="home">
        <Link href={"/"}>
          <a>Documentation v.2</a>
        </Link>
      </div>
      <div className="content ">{children}</div>
    </div>
  );
}

export default LayoutMarkdown;
