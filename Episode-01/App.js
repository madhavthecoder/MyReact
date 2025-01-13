

/* const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hello World from React"
); 

console.log(heading); //object 
*/

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div",{id:"child"}, [
        React.createElement("h1", {id:"heading"}, "This is H1 Tag"),
        React.createElement("h2", {}, "This is H2 tag"),
    ]),
    React.createElement("div",{id:"child2"}, [
        React.createElement("h1", {id:"heading"}, "This is H1 Tag"),
        React.createElement("h2", {}, "This is H2 tag"),
    ])
)
   
const root = ReactDOM.createRoot(document.getElementById("root"));
    
// root.render(heading);

root.render(parent);