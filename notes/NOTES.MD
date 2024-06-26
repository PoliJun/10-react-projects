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

#### `useState` with array (array destructuring)

```jsx
import React, { useState } from "react";

function App() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, items.length + 1]);
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
```

with filter method

```jsx
import React, { useState } from "react";

function App() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, items.length + 1]);
    };

    const removeItem = (index) => {
        setItems(items.filter((item, i) => i !== index));
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}{" "}
                        <button onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

#### `useState` with object (object destructuring)

```jsx
import React, { useState } from "react";

function App() {
    const [person, setPerson] = useState({ name: "John", age: 30 });

    const updatePerson = () => {
        setPerson({ ...person, age: person.age + 1 });
    };

    return (
        <div>
            <h1>
                {person.name} is {person.age} years old
            </h1>
            <button onClick={updatePerson}>Update Age</button>
        </div>
    );
}
```

#### Handle Change (onChange)

```jsx
import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
```

**Notice:**

if

```jsx
<input
    type="text"
    placeholder="Name"
    value="something"
    onChange={(e) => setName(e.target.value)}
/>
```

The input will be read-only. Because the `value` is hard-coded.

### `useEffect`

`useEffect` is a hook that allows you to perform side effects in functional components.

```jsx
import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

**Explanation of "side effect"**

A side effect is any change in the application state that is observable outside the function being called. Side effects include things like changing the document title, fetching data from an API, or setting up event listeners.

#### dependency array

The second argument to `useEffect` is an array of dependencies. If the dependencies change, the effect will run again.

1. Render for the first time
    > If you provide an empty dependency array to useEffect, the effect will only run once after the initial render. This is similar to componentDidMount in a class component.
2. Anytime we do(side effect)
    > If you don't provide a dependency array to useEffect, the effect will run after every render, including re-renders caused by state or prop changes. This is similar to combining componentDidMount and componentDidUpdate in a class component.
3. Dependency list changes

#### `useEffect` can't be called conditionally

```jsx
import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    if (count === 5) {
        useEffect(() => {
            alert("Count is 5");
        }, []);
    } // This will not work

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}
```

**Error:** React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render.

**Solution:** Move the conditional logic inside the `useEffect` hook.

#### Fetch data with `useEffect`

```jsx
import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/post",
        );
        const data = await response.json();
        if (data && data.length) setData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
```

## Props transfer through components

### Prop Drilling

Prop drilling is the process of passing props from a parent component to a deeply nested child component.

```jsx
// App
import ComponentA from "./ComponentA";

const App = () => {
    return <ComponentA />;
};

// ComponentA
import ComponentB from "./ComponentB";

const ComponentA = ({ name }) => {
    return <ComponentB name={name} />;
};

// ComponentB
const ComponentB = ({ name }) => {
    return <ComponentC name={name} />;
};
// ...
```

### Context API

The Context API is a way to share data between components without having to pass props down manually at every level.

Steps:

1. Create a context
    > `const UserContext = createContext();`
2. Provide a context value
    > `<UserContext.Provider value={{ user, setUser }}>`
3. Consume the context value
    > `const { user, setUser } = useContext(UserContext);`
4. \*Update the context value
    > `setUser("Doe");`
5. \*Remove the context value
    > `<UserContext.Provider value={null}>`

```jsx
// App
import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext();

const App = () => {
    const [user, setUser] = useState("John");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <ComponentA />
        </UserContext.Provider>
    );
};

// ComponentA
import ComponentB from "./ComponentB";

const ComponentA = () => {
    return <ComponentB />;
};

// ComponentB
import { UserContext } from "./App";

const ComponentB = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>{user}</h1>
            <button onClick={() => setUser("Doe")}>Change User</button>
        </div>
    );
};
```

##### **\*learn about** `UserContext.Provider` and `UserContext.Consumer`

In the context of React, a `Consumer` is a component that subscribes to context changes. This comes from the newer Context API where you create a context object using `React.createContext()`, and it returns an object with a `Provider` and a `Consumer` in it.

The `Provider` component is used higher in the tree and accepts a `value` prop. The `Consumer` component is used anywhere below the provider in the tree and reads the current context value from the closest matching `Provider` above it in the tree.

Here's a basic example:

```jsx
import React, { createContext } from 'react';

// Create a Context object
const MyContext = createContext(defaultValue);

class MyComponent extends React.Component {
  render() {
    return (
      // Use the Provider to pass the current context value to the tree below
      <MyContext.Provider value={/* some value */}>
        <AnotherComponent />
      </MyContext.Provider>
    );
  }
}

function AnotherComponent() {
  return (
    // Use the Consumer to read the current context value
    <MyContext.Consumer>
      {value => /* render something based on the context value */}
    </MyContext.Consumer>
  );
}
```

In this example, `AnotherComponent` uses `MyContext.Consumer` to read the current context value from the closest `MyContext.Provider` above it in the tree.

However, in your provided code, the `useContext` Hook is being used, which is a simpler way to consume context that doesn't require a `Consumer` component. The `useContext` Hook takes a context object as an argument and returns the current context value, just like `Context.Consumer`.

### `useReducer`

**Intro:** `useReducer` is a hook that is used for state management in React. It is an alternative to `useState` that allows you to manage more complex state logic in your components.

**Syntax:**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

**Parameters:**

-   `reducer`: A function that takes the current state and an action as arguments and returns the new state.
-   `initialState`: The initial state of the reducer.

**Example:**

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;
```

**Example in TypeScript:**

```tsx
import React, { useReducer } from "react";

type State = { count: number };

type Action = { type: "increment" } | { type: "decrement" };

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;
```

### `useRef`

**Intro:** `useRef` is a hook that returns a mutable ref object whose `.current` property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

**Syntax:**

```jsx
const refContainer = useRef(initialValue);
```

**Parameters:**

-   `initialValue`: The initial value of the ref object.
-   `refContainer.current`: The current value of the ref object.
-   `refContainer.current = value`: Assign a new value to the ref object.
-   `refContainer.current.focus()`: Access the DOM node or React element.
-   `refContainer.current = null`: Reset the ref object.
-   `refContainer.current?.focus()`: Optional chaining.
-   `refContainer.current?.current`: Nested ref.
-   `refContainer.current = useRef(null)`: Nested ref initialization.

**Example:**

```jsx
import React, { useRef } from "react";

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}

export default TextInputWithFocusButton;
```

### Custom Hooks

**Intro:** Custom hooks are JavaScript functions whose names start with "use" and may call other hooks. They allow you to reuse stateful logic across multiple components.

**`useState` Example:**

```jsx
// define a custom hook
import { useState } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return { count, increment, decrement };
}

export default useCounter;

// usage
import React from "react";
import useCounter from "./useCounter";

function Counter() {
    const { count, increment, decrement } = useCounter(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
```

**`useEffect` Example:**

```jsx
// define a custom hook
import { useEffect } from "react";

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

export default useDocumentTitle;

// usage

import React from "react";
import useDocumentTitle from "./useDocumentTitle";

function App() {
    useDocumentTitle("Custom Hook Example");

    return <h1>Custom Hook Example</h1>;
}
```
