import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import Menu from "./menu";
import Search from "./search";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <div className="layoutMarkdown">
      <div className={`home ${open && "open"}`}>
        <Link href={"/"}>
          <a className="logo">Documentation v.2</a>
        </Link>
        <Search />
        <Menu />
      </div>

      <main className={`${open && "active"}`}>
        <i onClick={() => setOpen(!open)}>
          <Image src={"/icons/menu.svg"} width={30} height={30} />
        </i>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
