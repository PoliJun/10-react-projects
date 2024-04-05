# Ten React Apps Note

## Intro

- Developed by Facebook 2011
- Use components to build UI
- Build Modular Apps
- Learn Once, Write Anywhere
- React is a library for building user interfaces

## render

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## Component

- Component names must start with a capital letter
- Reusable

## React.createElement

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

### JSX

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
