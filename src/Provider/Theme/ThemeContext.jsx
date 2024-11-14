import { createContext, useReducer } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const initialstate = {
    dark: JSON.parse(localStorage.getItem("dark")),
  };

  const ThemeReducer = (state, action) => {
    if (action.type === "CHANGE_THEME") {
      return {
        ...state,
        dark: state.dark ? false : true,
      };
    }
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialstate);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
