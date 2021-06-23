import React from "react";
import style from "./country.module.css"
import { Link } from "react-router-dom";
const Country = ({ flagimg, name, region, id, activities }) => {
  return (
      <div className={style.countryContainer}>
      <Link className={style.link} to={`/countries/${id}`}>
      
          <h2 className={style.text}>{name}</h2>
          <div className={style.imgContainer}>
            <img src={flagimg} alt="no img"/>
          </div>
          <h3>{region}</h3>
          <h3>{activities}</h3>
        
      </Link>
    </div>
  );
};

export default Country;



