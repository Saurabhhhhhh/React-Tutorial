import React from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement(
    "div", {id:"parent"}, [React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I'm a h1 heading."), React.createElement("h2", {}, "I'm a h2 heading.")]), React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "I'm a h1 heading."), React.createElement("h2", {}, "I'm a h2 heading.")])]
    );
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(heading);
