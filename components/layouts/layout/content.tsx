import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  open: boolean;
  setOpen: () => void;
  children: ReactNode;
};

function Content({ open, setOpen, children }: Props) {
  return (
    <main className={`content ${open && "active"}`}>
      <i
        onClick={() => {
          setOpen();
        }}
      >
        <Image src={"/icons/menu.svg"} alt="*" width={30} height={30} />
      </i>
      <div className="">{children}</div>
    </main>
  );
}

export default Content;
