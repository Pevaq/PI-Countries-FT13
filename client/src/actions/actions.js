import axios from "axios";
import {
  GET_COUNTRIES,
  GET_DETAIL,
  GET_NAME,
  ORD_ALPHA,
  ORD_ALPHA_REV,
  ORD_POP,
  ORD_POP_REV,
  ORD_CONTINENT,
  SHOW_ACTIV,
} from "./actionNames";

export function getCountries() {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/countries/");
    dispatch({ type: GET_COUNTRIES, payload: res.data });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_DETAIL, payload: res.data });
  };
}
export function getName(name) {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );

      dispatch({ type: GET_NAME, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderAlpha() {
  return {
    type: ORD_ALPHA,
  };
}

export function orderAlphaRev() {
  return {
    type: ORD_ALPHA_REV,
  };
}

export function orderPop() {
  return {
    type: ORD_POP,
  };
}

export function orderPopRev() {
  return {
    type: ORD_POP_REV,
  };
}

export const orderCont = (payload) => {
  return {
    type: ORD_CONTINENT,
    payload,
  };
};

export const showActiv = (payload) => {
  return {
    type: SHOW_ACTIV,
    payload,
  };
};

export function createCountry(activity) {
  console.log("ACTIVITY: ", activity);
  return async function () {
    try {
      console.log("body de form" + activity);
      const newAct = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      console.log(newAct);
    } catch (error) {
      console.log(error);
    }
  };
}
