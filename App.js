import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLelement(when rendered)

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "React Tutorial"
// );

//1. JSX - HTML like or XML like syntax. This code is transpiled before going to browser by parcel(babel).
//2. JSX => React.createElement => object(js object) => HTMLelement(when render)
//3. use camel case for attributes. To write multiple lines of JSX use ().

// React element
// const heading = <h1 className="head">React Tutorial</h1>;

// React Functional Component
const Title = () => <h1>React Tutorial</h1>;

// Using {run any js code}. At the end of the day react functional component is a js function.
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
