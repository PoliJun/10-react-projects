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
