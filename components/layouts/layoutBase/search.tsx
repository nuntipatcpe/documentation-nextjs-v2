import { search } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
import { MENU } from "@/utils/constant";
import React, { useEffect, useState } from "react";

type Props = {
  isSearch: boolean;
};

export default function Search({ isSearch }: Props) {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(search(searchTerm));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <div
      className="search-box"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setDisable(!disable);
        }
      }}
    >
      <input
        type="text"
        placeholder="Serach"
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => {
          setDisable(true);
        }}
        value={searchTerm.replace("-", "")}
      />
      {isSearch ? (
        <div className={`box ${disable && "disable"}`}>
          <div className="box_menu">
            {MENU.map((e) => (
              <button
                onClick={() => {
                  setSearchTerm(e);
                  dispatch(search(e));
                  setDisable(!disable);
                }}
              >
                {e.replace("-", "")}
              </button>
            ))}
          </div>
          <div
            className={`bg ${disable && "display-block"}`}
            onClick={() => setDisable(!disable)}
          ></div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
}
