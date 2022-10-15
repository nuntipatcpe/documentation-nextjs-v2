import Image from "next/image";
import React, { useState } from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">
      <Header open={open} />
      <main className={`${open && "active"}`}>
        <i onClick={() => setOpen(!open)}>
          <Image src={"/icons/menu.svg"} width={30} height={30} />
        </i>

        {children}
      </main>
    </div>
  );
}

export default Layout;
