import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import './App.css'
function App(){
   return (
      <div className="App">
         <div className="container">
            <Card/>
         </div>
      </div>
   )
}
ReactDOM.render(
   <App/>
,document.getElementById('root'));