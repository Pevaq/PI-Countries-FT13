import React, { useEffect, useState } from "react";
import Country from "./Country.jsx";
import { useSelector } from "react-redux";
import style from "./countries.module.css";
import "./countries.module.css"

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(0);

  let nextPage = () => {
    if (countries.length <= currentPage + 10) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 10);
  };
  let prevPage = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 10);
    }
  };

  const firstPage = () => {
    setCurrentPage(0);
  };

  const lastPage = () => {
    setCurrentPage(countries.length - 10);
    console.log(currentPage);
  };

  useEffect(() => {
    firstPage()
  }, [countries]);

  
 const filteredC = countries.slice(currentPage, currentPage + 10);
  
    return (
      <div>
        <button onClick={firstPage} className={style.butn}>  {'<<'}  </button>
        <button onClick={prevPage} className={style.butn}>  {'<'}   </button>
        <button onClick={nextPage} className={style.butn}>  {'>'}   </button>
        <button onClick={lastPage} className={style.butn}>  {'>>'}</button>
        <div className={style.grid}>
          {
          filteredC.map((e) => ( 
            <Country
              id={e.id}
              flagimg={e.flagimg}
              name={e.name}
              region={e.region}
            />))}
        </div>
      </div>
    );
  }

 
export default Countries;
