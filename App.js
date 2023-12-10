const heading = React.createElement("div",{ id: "parent" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Tag 1"),
    React.createElement("h1", {}, "Tag 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Tag 1"),
    React.createElement("h1", {}, "Tag 2"),
  ])
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//everything placed/show in root
root.render(heading);
