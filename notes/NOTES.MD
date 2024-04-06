# Ten React Apps Note

## Intro

-   Developed by Facebook 2011
-   Use components to build UI
-   Build Modular Apps
-   Learn Once, Write Anywhere
-   React is a library for building user interfaces

## render

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
```

## Component

-   Component names must start with a capital letter
-   Reusable

## JSX

### React.createElement

```jsx
React.createElement("div", { className: "App" }, "Hello World");
```

nested elements

```jsx
React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "Hello World"),
);
```

Then, we have jsx

```jsx
function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
}
```

### Only one root element

```jsx
function App() {
    return (
        <div className="App">
            {" "}
            {/* root element */}
            <h1>Hello World</h1>
            <h2>Goodbye World</h2>
        </div>
    );
}
```

### JSX elements

-   self-closing tags
    -   `<img src="image.jpg" alt="image" />`
    -   `<input type="text" />`
    -   `<br />`
    -   `<hr />`
-   className instead of class
-   htmlFor instead of for
-   camelCase property naming convention
-   style attribute
-   comments
    -   `{/* comment */}`
    -   `{/** comment */}`
    -   `{/**/}`
-   Fragments
    Explain: React.Fragment is a built-in component that allows us to group multiple elements without adding extra nodes to the DOM.

    -   `<React.Fragment></React.Fragment>`
    -   `<> </>`

### Curly braces {}

-   `{}` is used to evaluate JavaScript expressions

```jsx
function App() {
    const name = "John Doe";

    return (
        <h1>
            Hello {name}, {multiply(4, 4)}
        </h1>
    );
}
```

## Lists

use map to render a list of items

```jsx
function App() {
    const names = ["John", "Doe", "Jane"];
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
}
```

notice the `key`.

Here, you just use `()`. Every time there is a curly braces in function, we need to return something.

example:

```jsx
function App() {
    const names = ["John", "Doe", "Jane"];
    return (
        <ul>
            {names.map((name, index) => {
                return <li key={index}>{name}</li>;
            })}
        </ul>
    );
}
```

You need `return` keyword in the function.

## Props/Properties

-   Props are arguments passed into React components
-   via HTML attributes
-   Props are read-only

```jsx
function App(props) {
    return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(<App name="John" />, document.getElementById("root"));
```

### Or use destructuring

```jsx
function App({ name }) {
    return <h1>Hello, {name}</h1>;
}

ReactDOM.render(<App name="John" />, document.getElementById("root"));
```

### children prop

```jsx
function Parent() {
    return (
        <Child>
            <p>Children</p>
        </Child>
    );
}

function Child({ children }) {
    return <div>{children}</div>;
}
```

## Conditional Rendering

### if-else

```jsx
function App({ user }) {
    if (user) {
        return <h1>Hello, {user}</h1>;
    } else {
        return <h1>Hello, Guest</h1>;
    }
}
```

### ternary operator

```jsx
function App({ user }) {
    return <h1>Hello, {user ? user : "Guest"}</h1>;
}
```

### logical && operator

```jsx
function App({ user }) {
    return <h1>Hello, {user && user}</h1>;
}
```

Explain: If the user is not null, then render the user. If the user is null, then render nothing.
This is because the logical AND operator (&&) returns the last value if all values are truthy. If any value is falsy, it returns the first falsy value.

### switch case

```jsx
function App({ user }) {
    switch (user) {
        case "John":
            return <h1>Hello, John</h1>;
        case "Doe":
            return <h1>Hello, Doe</h1>;
        default:
            return <h1>Hello, Guest</h1>;
    }
}
```

**Summary:** Ampersand is used to render the last value if all values are truthy. If any value is falsy, it returns the first falsy value. This is popular for conditional rendering.

## import CSS

```jsx
import "./App.css";
```

### React Bootstrap

[react-bootstrap](https://react-bootstrap.github.io/)

Or search google for react bootstrap

Install React Bootstrap

```bash
npm install react-bootstrap bootstrap
```

#### Button

```jsx
import { Button } from "react-bootstrap";

function App() {
    return <Button variant="primary">Primary</Button>;
}
```

Explain props: `variant` is a prop that changes the appearance of the button.

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/)

**Guide:**

The installation guide for Tailwind CSS using the Tailwind CLI tool involves the following steps:

1. Install Tailwind CSS via npm with the command `npm install -D tailwindcss`.
2. Create a `tailwind.config.js` file which will hold configuration settings.
3. Add the paths to all template files in the `tailwind.config.js` file, using the `content` property.
4. Add the `@tailwind` directives to the main CSS file for each of Tailwind's layers: base, components, and utilities.
5. Run the Tailwind CLI tool with the command `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch` to scan template files and build the CSS.
6. Include the compiled CSS file in the HTML `<head>` section and start using Tailwind's utility classes to style the content.

**Install Tailwind CSS**

```bash
npm install -D tailwindcss
npx tailwindcss init
```

**Configure your template paths**

copy config file content to your project

`tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

**Add the Tailwind directives to your CSS**

`src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Start the Tailwind CLI build process**

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

**Start using Tailwind in your HTML**

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./output.css" rel="stylesheet" />
    </head>
    <body>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </body>
</html>
```

### React Icons

[react-icons](https://react-icons.github.io/react-icons/)

**Install React Icons**

```bash
npm install react-icons
```

**Usage**

```jsx
import { FaReact } from "react-icons/fa";

function App() {
    return <FaReact />;
}
```

## Event Handling

React supports a variety of event handlers that correspond to native DOM events. Here's a list of them:

[Events](./OTHER.md/)

Remember, in React, these event handlers are written in camelCase, not lowercase.

### Button

```jsx
const Button = () => {
    const handleClick = (a, b) => {
        alert(a + b);
    };
    return <button onClick={() => handleClick(2, 3)}>Button</button>;
};

export default Button;

function App() {
    return <Button />;
}
```

#### Notice

```jsx
const Button = () => {
    const handleClick = (a, b) => {
        alert(a + b);
    };
    return <button onClick={handleClick(2, 3)}>Button</button>;
};

export default Button;

function App() {
    return <Button />;
}
```

**_Why the code will cause alert Immediately when page refresh?_**

The reason the alert is triggered immediately when the page refreshes is because of this line:

```jsx
return <button onClick={handleClick(2, 3)}>Button</button>;
```

In this line, `handleClick(2,3)` is being executed immediately when the `Button` component is rendered, not when the button is clicked.

To fix this, you should pass a function to `onClick` that calls `handleClick(2,3)` when the button is clicked. You can do this by using an arrow function, like this:

```jsx
return <button onClick={() => handleClick(2, 3)}>Button</button>;
```

In this corrected code, `() => handleClick(2,3)` is a new function that calls `handleClick(2,3)` when it's invoked. This new function is only invoked when the button is clicked, so the alert only appears when the button is clicked.

**_When click the button, the function defined on onClick will receive an event param, is it right?_**

Yes, that's correct. In React, every event handler, like the `onClick` handler, receives an event object as its first argument. This event object is a SyntheticEvent, which is a cross-browser wrapper around the browser's native event.

However, in your current code, you're not using this event object. You're calling `handleClick` with two hard-coded arguments `(2,3)`. If you want to use the event object, you could modify your code like this:

```jsx
const Button = () => {
    const handleClick = (event, a, b) => {
        alert(a + b);
        console.log(event); // Logs the event object
    };
    return (
        <button onClick={(event) => handleClick(event, 2, 3)}>Button</button>
    );
};

export default Button;

function App() {
    return <Button />;
}
```

In this modified code, `handleClick` now takes an additional `event` parameter, and the `onClick` handler passes the `event` object to `handleClick`.

## Hooks

Hooks are added in React 16.8. They allow you to use state and other React features without writing a class.
Before hooks, you could only use state in class components.

example of using state in class components:

```jsx
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }>
                    Increment
                </button>
            </div>
        );
    }
}
```

### State

-   State is a built-in object in React that stores component-specific data
-   State is mutable
-   Whenever the state changes, the component re-renders

#### `useState`

`useState` is a hook that allows you to add state to functional components.

```jsx
import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```


