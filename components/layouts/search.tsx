import {
  clearSearch,
  searchSelector,
  setSearch,
} from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
import { MenuBasicLanguage, MenuConfig, MenuDevtools } from "@/utils/constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  isSearch: boolean;
};

export default function Search({ isSearch }: Props) {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [disable, setDisable] = useState(false);
  const { search } = useSelector(searchSelector);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(setSearch(searchTerm));
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  useEffect(() => {
    setSearchTerm("");
  }, [search === " ", dispatch]);

  return (
    <div
      className="search"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setDisable(!disable);
        }
      }}
    >
      <div className="search_input">
        <input
          type="text"
          placeholder="Serach"
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            setDisable(true);
          }}
          value={searchTerm.replace("-", "")}
        />
        <div
          onClick={() => {
            setSearchTerm("");
          }}
          className={`search_input_colse ${
            searchTerm === "" && "search_input_colse_none"
          }`}
        >
          <Image
            alt="*"
            src={"/icons/close.svg"}
            width={15}
            height={15}
          ></Image>
        </div>
      </div>

      {isSearch ? (
        <div className={`search_box ${disable && "search_box_open"}`}>
          <h3>Dev Tools</h3>
          <div className="search_box_menu">
            {MenuDevtools.map((e) => (
              <button
                key={e}
                onClick={() => {
                  setSearchTerm(e);
                  dispatch(setSearch(e));
                  setDisable(!disable);
                }}
              >
                {e.replace("-", "")}
              </button>
            ))}
          </div>
          <h3>Language</h3>
          <div className="search_box_menu">
            {MenuBasicLanguage.map((e) => (
              <button
                key={e}
                onClick={() => {
                  setSearchTerm(e);
                  dispatch(setSearch(e));
                  setDisable(!disable);
                }}
              >
                {e.replace("-", "")}
              </button>
            ))}
          </div>
          <h3>Config</h3>
          <div className="search_box_menu">
            {MenuConfig.map((e) => (
              <button
                key={e}
                onClick={() => {
                  setSearchTerm(e);
                  dispatch(setSearch(e));
                  setDisable(!disable);
                }}
              >
                {e.replace("-", "")}
              </button>
            ))}
          </div>
          <p
            className={`search_box_bg ${disable && "search_box_bg_close"}`}
            onClick={() => setDisable(!disable)}
          />
        </div>
      ) : (
        <span />
      )}
    </div>
  );
}
