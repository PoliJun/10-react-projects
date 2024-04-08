# Projects

## Project 1: Counter

-   `useState`
-   onClick, passing a function not a function call

## Project 2: Todo

-   Passing functions as props
-   Use destructuring to update list
    > `setTodos([...todos, { text: input, id: generateId() }]);`
-   map with destructuring
    > `todos.map(({ text, id }) => <Todo key={id} text={text} />)`
-   onClick: passing a function with arguments
    > `onClick={() => deleteTodo(id)}`

## Project 3: Meal API (fetch or axios)

-   `useEffect`: empty array as second argument, to run only once
-   catch error in fetch
    > `fetch(url).then(res => res.json()).catch(err => console.log(err));`
-   catch error in axios
    > `axios.get(url).then(res => console.log(res.data)).catch(err => console.log(err));`

## Project 4: Calculator

-   `eval()`: this is not recommended in official documentation. It is better to use a library like math.js

## My Project: Layout

-   children prop

    ```jsx
    import Header from "./Header";

    const Layout = ({ children }) => {
        return (
            <>
                <Header />
                {children}
            </>
        );
    };
    export default Layout;
    ```

Explanation: The `children` prop is a special prop that is passed to components automatically. It represents the content between the opening and closing tags of a component.

## Project 5: ToggleColor

-   change style through state changing
-   In javascript, object defined shorthand

    ```jsx
    <div className="container" style={{ backgroundColor,{/* shorthand */} color: textColor }}>
        <button
            onClick={handleClick}
            style={{
                background: buttonStyle,
                color: textColor,
                border: `2px solid ${textColor}`,
            }}>
            White Theme
        </button>
        <div className="content">
            <h1>
                Welcome To A <br />
                Real World
            </h1>
        </div>
    </div>
    ```

Explain:
In JavaScript (and by extension, JSX), object properties can be defined in two ways:

1. Using the syntax `propertyName: propertyValue`, like `background-color: backgroundColor`.
2. Using the shorthand property name syntax, where if the property name is the same as the variable name, you can just write the name once. This is what's happening in your code with `backgroundColor`.

In your code, `backgroundColor` and `textColor` are variables that hold the values for the background color and text color respectively. When you write `style={{ backgroundColor, color: textColor }}`, it's equivalent to writing `style={{ backgroundColor: backgroundColor, color: textColor }}`.

However, CSS properties like `background-color` that contain a hyphen are not valid identifiers in JavaScript. Therefore, they must be written in camelCase when used in inline styles in JSX. So, `background-color` becomes `backgroundColor`.

So, in your case, `backgroundColor` is the JavaScript-friendly name for the CSS `background-color` property, and the value of `backgroundColor` is coming from the `backgroundColor` variable.

## Project 6: HiddenSearchBar

-   flag to show/hide search bar
-   onClick setting tricks:

    > both parent element and child element have onClick, add logic check `e.target.className` in parent. If it is child clicked, then do nothing.
    >
    > ```jsx
    > import { useState } from "react";
    > import { FaSearch } from "react-icons/fa";
    > import "../styles/HiddenSearchBar.scss";
    >
    > const HiddenSearchBar = () => {
    >     const [showInput, setShowInput] = useState(false);
    >     const [bgColor, setBgColor] = useState("white");
    >
    >     const handleClick = (e) => {
    >         setBgColor("#1a1a1a");
    >         if (e.target.className === "hsb-container") {
    >             setShowInput(false);
    >             setBgColor("#fff");
    >         }
    >     };
    >
    >     return (
    >         <div className="hsb-root">
    >             <section
    >                 className="hsb-container"
    >                 style={{ backgroundColor: bgColor }}
    >                 onClick={handleClick}>
    >                 {showInput ? (
    >                     <input type="text" placeholder="Search..." />
    >                 ) : (
    >                     <FaSearch onClick={() => setShowInput(true)} />
    >                 )}
    >             </section>
    >         </div>
    >     );
    > };
    > export default HiddenSearchBar;
    > ```

## Project 7: Testimonials

-   `useState` to change the index of the array

-   Tricks to change the index of the array:

`%` operation, wrap around the array

```js
const handlePrev = () => {
    setCurrentIndex(
        (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
};

const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
};
```

-   CSS design:

CSS design. I want body min-width: 100vh; , then Header at the top, and .l-container keep the rest height.

```css
#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    /* your existing styles */
}

.l-container {
    flex-grow: 1;
    /* your existing styles */
}
```

### `flex-grow`

The `flex-grow` property in CSS is a sub-property of the Flexible Box Layout module, commonly known as Flexbox. It defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have `flex-grow` set to 1, every child will set to an equal size inside the container. If you were to give one of the children a value of 2, that child would take up twice as much space as the others.

In your code:

```scss
.l-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
}
```

The `flex-grow: 1;` means that the `.l-container` element will take up any remaining space in its flex container. If there are other flex items in the same container with `flex-grow: 1;`, the space will be distributed equally among them. If there are no other flex items, `.l-container` will take up all the remaining space.

## Project 8: Accordion

### Unique key for each item

    ```jsx
    {
        accordionData.map(({ title, content }, index) => (
            <Accordion key={index} title={title} content={content} />
        ));
    }
    ```

    Explanation: In React, when rendering a list of components using `map`, each component should have a unique `key` prop. This helps React efficiently update the list when items are added, removed, or reordered. In your code, you are mapping over the `accordionData` array and rendering an `Accordion` component for each item. By providing a unique `key` prop based on the `index` of each item, you ensure that React can keep track of each component correctly.

## Project 9: Form Validation

### States pattern

1. input value
2. error message
3. borderColor: to show error message

```jsx
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [errorUsername, setErrorUsername] = useState("");
const [errorEmail, setErrorEmail] = useState("");
const [errorPassword, setErrorPassword] = useState("");
const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

const [userColor, setUserColor] = useState("");
const [emailColor, setEmailColor] = useState("");
const [passwordColor, setPasswordColor] = useState("");
const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
```

### onChange to update input value

```jsx
<input
  type="text"
  placeholder="Name"
  style={{ borderColor: userColor }}
  value={username}
  onChange={(e) => {
    setUsername(e.target.value);
  }}
/>
<p className="error">{errorUsername}</p>
```

### Validation

#### button in form

**Yes, in HTML, a `<button>` element inside a `<form>` element defaults to the type "submit". This means that when the button is clicked, it will trigger the form's submit event.**

In your code:

```jsx
<button className="submit-btn" onClick={validate}>
    Submit
</button>
```

The button will trigger the form's submit event when clicked. However, you're also attaching an `onClick` event handler to the button, which will call the `validate` function when the button is clicked.

If you want to prevent the form from being submitted when the button is clicked (for example, if the form is not valid), you can call `event.preventDefault()` in the `validate` function:

```jsx
const validate = (event) => {
    event.preventDefault();
    // rest of your validation logic
};
```

This will prevent the form from being submitted, which is the default action of the submit event.

#### Validation logic

```jsx
const validate = (e) => {
    e.preventDefault();
    if (username === "") {
        setErrorUsername("Username cannot be empty");
        setUserColor("red");
    } else {
        setErrorUsername("");
        setUserColor("green");
    }
};
```
