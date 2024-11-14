import React from "react";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import ThemeContext from "../Provider/Theme/ThemeContext";

const ThemeButton = () => {
  const { dark, dispatch } = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (dark) {
      localStorage.setItem("dark", JSON.stringify(false));
    } else {
      localStorage.setItem("dark", JSON.stringify(true));
    }
    dispatch({ type: "CHANGE_THEME" });
  };
  return (
    <button
      id="themebtn"
      className={
        dark
          ? "btn btn-sm btn-warning text-light"
          : "btn btn-sm btn-dark text-light"
      }
      onClick={handleThemeChange}
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeButton;
