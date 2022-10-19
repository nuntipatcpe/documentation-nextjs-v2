import { setAuthen } from "@/store/slices/authenSlice";
import { useAppDispatch } from "@/store/store";
import { TOKEN } from "@/utils/constant";
import React, { useState } from "react";

type Props = {};

export default function Auth({}: Props) {
  const [key, setKey] = useState("");
  const dispath = useAppDispatch();
  return (
    <form
      className="auth"
      onSubmit={(e) => {
        e.preventDefault();
        if (key === "boomdev1234") {
          localStorage.setItem(TOKEN, "xxxx-xxx-nnnn");
          dispath(setAuthen(true));
        } else {
          alert("error");
        }
      }}
    >
      <input
        type="password"
        placeholder="password"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button type="submit">successfully</button>
    </form>
  );
}
