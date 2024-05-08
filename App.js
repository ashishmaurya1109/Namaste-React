import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h1", {id: "heading1"}, "I am Ashish 👨‍💻");
const heading2 = React.createElement("h2", {id: "heading2"}, "I am a Developer");

const children1 = React.createElement("div", {id: "child1"}, [heading1 ,heading2])
const children2 = React.createElement("div", {id: "child2"}, [heading1 ,heading2])
const parent = React.createElement("div", {id: "parent"}, children1, children2)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);