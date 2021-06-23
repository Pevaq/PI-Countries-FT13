import React, { useEffect, useState } from "react";
import { createCountry, getName } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { SmallCountry } from "./SmallCountry";
import style from "./form.module.css";
import {Link} from "react-router-dom"


const ActivityForm = () => {
  const countries = useSelector((state) => state.countries);
  const [inputName, setInputName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  let nextPage = () => {
    if (countries.length <= currentPage + 16) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 16);
  };
  let prevPage = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 16);
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [countries]);

  
 const filteredC = countries.slice(currentPage, currentPage + 16);

  const [dataForm, setDataForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryID: [],
  });

  const stateReset = () => {
    setDataForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryID: [],
    });

    setInputName("");
  };

  const submitInputName = (e) => {
    e.preventDefault();
    setInputName(e.target.value);
  };

  const setDataHandler = (e) => {
    e.preventDefault();

    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const setIdHandler = (e) => {
    e.preventDefault();

    setDataForm({
      ...dataForm,
      [e.target.name]: dataForm[e.target.name].concat(e.target.value),
    })

    alert("Country Added")
    
  };


  useEffect(() => {
    dispatch(getName(inputName));
  }, [inputName]);

  const submitForm = (e) => {
    e.preventDefault();
    var form = true;

    if (dataForm["name"].length < 2) {
      form = false;
    }
     else if (!dataForm["countryID"].length >= 1) {
        form = false;
      }

    if (form) {
      dispatch(createCountry(dataForm))
        .then(() => stateReset())
        .then(() => alert("Activity added"))
 
    } else {
      return alert("Please fill all the fields before creating a new activity");
    }
  };


  return (
    <div>

      <div className={style.navBarContainer}>
       <Link to="/countries" className={style.homelink}>
         <p>Welcome LOGO</p>
        </Link>
       <form className={style.navBarContainer} onSubmit={(e)=>submitForm(e)}>
        <div  >
          <input className={style.inputName}
            type="text"
            placeholder="Name your activity"
            name="name"
            value={dataForm.name}
            onChange={setDataHandler}/> 
        </div>

        <div className={style.difficulty} >
          <label>Select difficulty</label>
          <select
            name="difficulty"
            value={dataForm.difficulty}
            id="difficulty"
            onChange={setDataHandler}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div className={style.duration}>
          <label>Duration in hours</label>
          <select
            name="duration"
            value={dataForm.duration}
            id="duration"
            onChange={setDataHandler}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
            <option value={21}>21</option>
            <option value={22}>22</option>
            <option value={23}>23</option>
            <option value={24}>24</option>
          </select>
        </div>

        <div className={style.season}>
        <label>Select season</label>
        <select
          name="season"
          value={dataForm.season}
          id="season"
          onChange={setDataHandler}>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
        </div>

        <div className={style.countries}>
            <label>Select Countries</label>
            <input className={style.countries1}
              type="text"
              placeholder="find your country..."
              onChange={submitInputName}/>   
        </div>
        <div>
          <input className={style.btn1} type="submit" value="Add activity" />
        </div>
      </form>
      </div>
   
        <button onClick={prevPage} className={style.butn}>  {'<'}   </button>
        <button onClick={nextPage} className={style.butn}>  {'>'}   </button>
    
     <div className={style.order} >
          {filteredC.length < 30 ? (
            filteredC.map((c) => (
              <div  className={style.countryCont}>
                <div>
                <SmallCountry  key={c.id} name={c.name} flagimg={c.flagimg} />
                <button className={style.btn} onClick={setIdHandler} value={c.id} name="countryID">
                  Add
                </button>
                </div>
              </div>
            ))
          ):console.log("ups")}
        </div>
    </div>
  );
};


export default ActivityForm;
