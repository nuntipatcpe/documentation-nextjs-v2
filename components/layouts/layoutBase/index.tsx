import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import Content from "./content";
import Menu from "./menu";
import Search from "./search";

type Props = {
  children: ReactNode;
  isSearch?: boolean;
};

function Layout({ children, isSearch }: Props) {
  const [open, setOpen] = useState(true);

  const hendleClose = () => {
    setOpen(!open);
  };
  const hendleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="layoutBase">
      <div className={`home ${open && "open"}`}>
        <Link href={"/"}>
          <a className="logo">Documentation v.2</a>
        </Link>
        {isSearch ? <Search /> : <span />}
        <Menu />
      </div>

      <Content children={children} open={open} setOpen={hendleOpen} />
    </div>
  );
}

export default Layout;
