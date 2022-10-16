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

  const hendleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="layoutBase">
      <div className={`home ${open && "open"}`}>
        <Link href={"/"}>
          <a className="logo lora">Documentation v.2</a>
        </Link>
        {isSearch ? <Search /> : <span />}
        <Menu />
      </div>

      <Content open={open} setOpen={hendleOpen}>
        {children}
      </Content>
    </div>
  );
}

export default Layout;
