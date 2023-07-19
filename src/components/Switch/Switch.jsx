import React from "react";
import { useState } from "react";
import { LabelStyled } from "./SwitchStyles";

const Switch = (props) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    props.theme == "light" ? props.setTheme("dark") : props.setTheme("light");
    localStorage.setItem("theme", props.theme);
    const localValue =
      localStorage.getItem("theme") == "light" ? "dark" : "light";
    localStorage.setItem("valueTheme", localValue);
  };


  return (
    <>
      <LabelStyled>
        <input type="checkbox" onClick={() => handleTheme()} />
        <div className="slider">
          <div className="circle" theme={theme}></div>
        </div>
      </LabelStyled>
    </>
  );
};

export default Switch;
