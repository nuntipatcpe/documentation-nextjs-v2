import { search } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
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
        value={searchTerm}
      />
      {isSearch ? (
        <div className={`box ${disable && "disable"}`}>
          <div className="box_menu">
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
            <button
              onClick={() => {
                dispatch(search("types"));
                setDisable(!disable);
                setSearchTerm("types");
              }}
            >
              button
            </button>
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
