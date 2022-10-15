import { search } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Search({}: Props) {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(search(searchTerm));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Serach"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </React.Fragment>
  );
}
