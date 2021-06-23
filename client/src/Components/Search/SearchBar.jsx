import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.css";
import { getCountries, getName } from "../../actions/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const onClickHandler = () => {
    dispatch(getName(input));
  };

  const homeHandler = () => {
    dispatch(getCountries());
  };
  

  return (
    <div className={style.inputsContainer}>
      <input className={style.inputText}
        type="text"
        placeholder="Search by name"
        name="input"
        onChange={(e) => inputHandler(e)}
      />
      <div>
      <button className={style.srctBtn} onClick={() => onClickHandler()}>Search</button>
      <button className={style.srctBtn} onClick={() => homeHandler()}>Reset</button></div>
    </div>
  );
};

export default SearchBar;
