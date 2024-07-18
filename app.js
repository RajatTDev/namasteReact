import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1", {id:"heading"}, "hello react");

// React.createElement creates js object for html rendering in with react DOM

// JSX == HTML-like or XML-like syntax

// JSX babel transpiles it to create React.createElement creates js object for html rendering in with react DOM

// React Element
const jsxHeading = <h1>Hello React using jsx</h1>;

// React functional component 

const HeadingFunction = () => <h1>Hello React using jsx from functional component</h1>

// component composition is to use two components into one 
const Heading = () => <h1>Hello React using jsx from functional component</h1>
const SubHeading = () => <h2>Hello React using jsx from functional component</h2>
const Container = () => (
    <div>
        <p>Boath Headings comes witn component composition</p>
        {console.log('hello console')}
        {jsxHeading}
        <Heading />
        <SubHeading />
    </div>
)
root.render(<Container />);

// root.render(heading);


// Swiggy food ordering app
/**
 * Header
 *  - Logo
 *  - Nav Item
 * Body
 *  - Search 
 *  - Restaurant Container 
 *      - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact 
 * 
 */