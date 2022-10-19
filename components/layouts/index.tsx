import { clearSearch, setSearch } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import Content from "./content";

import Search from "./search";

type Props = {
  children: ReactNode;
  isSearch?: boolean;
};

function Layout({ children, isSearch }: Props) {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const hendleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="layout">
      <div className={`header ${open && "header_open"}`}>
        <div
          onClick={() => {
            dispatch(clearSearch());
            setValue("");
          }}
        >
          <Link href={"/"}>
            <a className="header_logo lora">Documentation v.2</a>
          </Link>
        </div>
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
