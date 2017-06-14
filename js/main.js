const color = [
 'background: green',
 'color: white',
 'display: block'
].join(';');

console.log('%c console ready ', color);

//js is working with strings
const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

const render = () => {
  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
      <input />
      <p>${new Date()}</p>
    </div>
  `;

//react is working with objects
ReactDOM.render( //every HTML element will be represented with a JavaScript object using a React.createElement call
  React.createElement(
    "div",
    { className: "demo" },
      "Hello React",
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
  reactContainer
);
}

setInterval(render, 1000);
/*Although the whole React rendering code is within our ticking timer, React is changing only the timestamp paragraph and not the whole DOM node. */

