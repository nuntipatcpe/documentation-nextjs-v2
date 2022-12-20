import { authenSelector, setAuthen } from "@/store/slices/authenSlice";
import { useAppDispatch } from "@/store/store";
import { TOKEN } from "@/utils/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

function Login({}: Props) {
  const [key, setKey] = useState("");
  const dispath = useAppDispatch();
  const router = useRouter();
  const selec = useSelector(authenSelector);

  useEffect(() => {
    if (!localStorage.getItem(TOKEN)) {
      dispath(setAuthen(false));
    }
  }, [selec.isAuthen, dispath]);

  return (
    <div className="login">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (key === "boomdev1234") {
            localStorage.setItem(TOKEN, "xxxx-xxx-nnnn");
            dispath(setAuthen(true));
            router.back();
          } else {
            alert("error");
          }
        }}
      >
        {/* <input
          type="text"
          name=""
          id=""
          placeholder="username"
          onChange={(e) => setKey(e.target.value)}
        /> */}
        <input
          type="password"
          name=""
          id=""
          value={key}
          placeholder="password"
          onChange={(e) => setKey(e.target.value)}
        />
        <input type="submit" value={"Sin in"} />
        <Link href={"/"}>
          <a href="">Home</a>
        </Link>
      </form>
    </div>
  );
}

export default Login;
