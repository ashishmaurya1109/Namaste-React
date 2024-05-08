import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1 id="heading" className="heading">Hello World from jsx!</h1>

//React Components
// 1- Class based components
// 2- Functional components

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxElement);
