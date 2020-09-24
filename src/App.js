import React, { useCallback , useState } from "react";
import "./App.css";
import { ThemeProvider } from "./themeContext";
import { Test } from "./components/test-component/test";

function App() {
  const [number , setNumber] = useState(1) ;  
  const getItems = useCallback(increamenter => {
    return [number +increamenter ,number + increamenter + 1, number +increamenter + 2];
  } , [number]);
  return <div className="App">
     <input type ="number" 
     value = {number}
     onChange = {(e)=> setNumber(+e.target.value)}
     />
     <Test getItems = {getItems}></Test>
  </div>;
}

export default App;
