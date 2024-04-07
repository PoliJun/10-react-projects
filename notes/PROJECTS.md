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
