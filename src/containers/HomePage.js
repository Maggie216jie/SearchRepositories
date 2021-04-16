import React, { useState } from "react";
import "./HomePage.css";
import SearchInput from "../components/SearchBar/SearchInput";
import Header from "../components/Header/Header";
import ResultDisplay from "../components/ResultPanel/ResultDisplay";
import { THEME } from "../constants"


const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [toggleValue, setToggleValue] = useState(localStorage.getItem(THEME));

  const handleCheck = value => {
    setToggleValue(value);

    //use localStorage to stroe theme
    localStorage.setItem(THEME, value);
  };

  let dark =String(localStorage.getItem(THEME)) == "true" ? "dark": ""

  return (
    <div className={`whole-page-container ${dark}`}>

      {/* Header part, title and toggle button*/}
      <Header toggleValue={toggleValue} setToggleValue={handleCheck} />


       {/* Search bar part, input element */}
      <div className="search-bar-container">
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder={"Search by Name"}
        />
      </div>
      
       {/* display result based on graphQL result */}
      <div className="search-result-container">
        {inputValue.trim(" ") && <ResultDisplay inputValue={inputValue} />}
      </div>
    </div>
  );
};

export default HomePage;
