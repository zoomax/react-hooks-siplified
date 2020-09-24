import React, { useEffect, useState } from "react";
import { useThemeContext, useToggleThemeContext } from "../../themeContext";

export const Test = ({ getItems }) => {
  const darkTheme = useThemeContext();
  const toggleTheme = useToggleThemeContext();
  const theme = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  const [items, setItems] = useState([]);
  useEffect(() => {
    return setItems(getItems(2));
  }, [getItems]);
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};
