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
} from "../actions/actionNames";

import { ordAlpha, ordPop } from "../Components/Orders/Order";

const initialState = {
  countries: [],
  countryDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        countryDetail: action.payload,
      };
    }
    case GET_NAME: {
      return {
        ...state,
        countries: action.payload,
      };
    }

    case ORD_ALPHA: {
      return {
        ...state,
        countries: state.countries.slice().sort(ordAlpha),
      };
    }

    case ORD_ALPHA_REV: {
      return {
        ...state,
        countries: state.countries.slice().sort(ordAlpha).reverse(),
      };
    }

    case ORD_POP: {
      return {
        ...state,
        countries: state.countries.slice().sort(ordPop).reverse(),
      };
    }

    case ORD_POP_REV: {
      return {
        ...state,
        countries: state.countries.slice().sort(ordPop),
      };
    }
    case ORD_CONTINENT: {
      return {
        ...state,
        countries: state.countries.filter((c) => c.region === action.payload),
      };
    }
    case SHOW_ACTIV: {
      return{
        ...state,
        countries: state.countries.filter((c)=>{ return c.activities.some((a)=> a.name === action.payload)
           
        })
    }
    }

    default:
      return state;
  }
};

export default rootReducer;
