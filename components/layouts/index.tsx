import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
