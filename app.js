const heading = React.createElement("h1", {}, "Hello World From React Inside");
const root = ReactDOM.createRoot(document.getElementById("root"));
const parentDiv = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "heading" }, "Hello world from React with nested div"), React.createElement("h2", { id: "heading" }, "Hello world from React with nested div second")]));
root.render(parentDiv);
// root.render(heading);