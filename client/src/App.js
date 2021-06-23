import './App.css';
import React from "react"
import { Route } from 'react-router-dom';
import { Activities } from './Components/Activities/activities';
import Landing from './Components/Landing/Landing.jsx';
import { MainPage } from './Components/MainPage/MainPage';
import CountryId from "./Components/CountryId/CountryId.jsx"

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/countries" component={MainPage}/>
        <Route path ="/activities"component={Activities} />
        <Route exact path="/countries/:id" component={CountryId} />
    </div>
  );
}

export default App;
