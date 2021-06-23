import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css"



export function Landing() {
  return (
    <div className={style.land} >
        <h1>Discover the world</h1>
        <button className={style.button}>
      <Link className={style.link}  to="/countries">Home</Link>
      </button>
    </div>
  );
}
export default Landing;
