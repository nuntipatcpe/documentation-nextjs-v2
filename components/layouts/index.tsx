import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Menubar />
    </div>
  );
}

export default Layout;
