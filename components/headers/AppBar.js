import React from "react";
import SearchBar from "./SearchBar";
import style from "../style.module.css";
export default function AppBar() {
  return (
    <div className="shadow-md fixed w-full mb-10">
      <div className={style.appBar}>
        <SearchBar />
      </div>
    </div>
  );
}
