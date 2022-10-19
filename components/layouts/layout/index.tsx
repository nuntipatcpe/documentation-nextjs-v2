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
    <div className="layout">
      <div className={`header ${open && "open"}`}>
        <Link href={"/"}>
          <a className="header_logo lora">Documentation v.2</a>
        </Link>
        {isSearch ? <Search isSearch /> : <span />}
        {/* <Menu /> */}
        {/* <div className="header_menu"> */}
        <Link href={"/howToUse"}>
          <a className="header_menu" href="">
            How to Create file Markdown ?
          </a>
        </Link>
        {/* </div> */}
      </div>
      <Content open={open} setOpen={hendleOpen}>
        {children}
      </Content>
    </div>
  );
}

export default Layout;
