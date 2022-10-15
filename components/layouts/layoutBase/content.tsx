import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  open: boolean;
  setOpen: () => void;
  children: ReactNode;
};

function Content({ open, setOpen, children }: Props) {
  return (
    <div className="content_main">
      <main className={`${open && "active"}`}>
        <i
          onClick={() => {
            setOpen();
          }}
        >
          <Image src={"/icons/menu.svg"} width={30} height={30} />
        </i>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}

export default Content;
