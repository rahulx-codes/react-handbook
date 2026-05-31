# JSX (JavaScript XML)

## What is JSX?

JSX stands for **JavaScript XML**.

It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

Instead of creating elements manually, JSX makes UI code easier to read and write.

### Without JSX

```javascript
const element = React.createElement("h1", null, "Hello World");
```

### With JSX

```jsx
const element = <h1>Hello World</h1>;
```

Both produce the same result, but JSX is much cleaner.

---

# Why JSX?

JSX helps developers:

- Write UI faster
- Improve code readability
- Reduce complexity
- Create reusable components easily

Example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

---

# How JSX Works

Browsers do not understand JSX directly.

React uses a tool called **Babel** to convert JSX into regular JavaScript.

### JSX

```jsx
const element = <h1>Hello React</h1>;
```

### After Babel Conversion

```javascript
const element = React.createElement("h1", null, "Hello React");
```

---

# Rules of JSX

## 1. Return a Single Parent Element

❌ Wrong

```jsx
return (
  <h1>Hello</h1>
  <p>React</p>
);
```

✅ Correct

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);
```

---

## 2. Close Every Tag

❌ Wrong

```jsx
<input>
```

✅ Correct

```jsx
<input />
```

Other examples:

```jsx
<br />
<hr />
<img />
```

---

## 3. Use className Instead of class

HTML:

```html
<div class="container"></div>
```

JSX:

```jsx
<div className="container"></div>
```

Reason:

`class` is a reserved keyword in JavaScript.

---

## 4. Use camelCase for Attributes

HTML:

```html
<button onclick="clickHandler()"></button>
```

JSX:

```jsx
<button onClick={clickHandler}>
```

Examples:

| HTML        | JSX         |
| ----------- | ----------- |
| onclick     | onClick     |
| onchange    | onChange    |
| onmouseover | onMouseOver |

---

# JavaScript Inside JSX

JavaScript expressions can be written inside curly braces `{}`.

Example:

```jsx
function App() {
  const name = "Rahul";

  return <h1>Hello {name}</h1>;
}
```

Output:

```text
Hello Rahul
```

---

# Expressions in JSX

JSX can evaluate expressions.

```jsx
function App() {
  const a = 10;
  const b = 20;

  return <h1>{a + b}</h1>;
}
```

Output:

```text
30
```

---

# Using Variables

```jsx
function App() {
  const message = "Welcome to React";

  return <h1>{message}</h1>;
}
```

---

# Using Functions

```jsx
function App() {
  function greet() {
    return "Good Morning";
  }

  return <h1>{greet()}</h1>;
}
```

Output:

```text
Good Morning
```

---

# Using Objects

```jsx
function App() {
  const user = {
    name: "Rahul",
    age: 20,
  };

  return <h1>{user.name}</h1>;
}
```

Output:

```text
Rahul
```

---

# JSX Comments

HTML Comment:

```html
<!-- Comment -->
```

JSX Comment:

```jsx
{
  /* This is a comment */
}
```

Example:

```jsx
function App() {
  return (
    <div>
      {/* Heading */}
      <h1>Hello React</h1>
    </div>
  );
}
```

---

# JSX Fragments

Fragments allow multiple elements without adding an extra div.

Using React Fragment:

```jsx
return (
  <React.Fragment>
    <h1>Hello</h1>
    <p>React</p>
  </React.Fragment>
);
```

Short Syntax:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>React</p>
  </>
);
```

---

# Embedding HTML in JSX

```jsx
function App() {
  return (
    <div>
      <h1>React</h1>
      <p>Learning JSX</p>
    </div>
  );
}
```

---

# JSX vs HTML

| HTML     | JSX       |
| -------- | --------- |
| class    | className |
| for      | htmlFor   |
| onclick  | onClick   |
| onchange | onChange  |
| tabindex | tabIndex  |

---

# Common Beginner Mistakes

### Missing Parent Element

❌

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

### Unclosed Tag

❌

```jsx
<input>
```

### Using class Instead of className

❌

```jsx
<div class="box"></div>
```

### Forgetting Curly Braces

❌

```jsx
<h1>name</h1>
```

✅

```jsx
<h1>{name}</h1>
```

---

# JSX Cheat Sheet

```jsx
// Variable
<h1>{name}</h1>

// Expression
<h1>{10 + 20}</h1>

// Function
<h1>{greet()}</h1>

// Object Property
<h1>{user.name}</h1>

// Comment
{/* Comment */}

// Fragment
<>
  <h1>Hello</h1>
</>

// className
<div className="container"></div>

// Self Closing Tag
<input />
```

---

# Summary

- JSX stands for JavaScript XML.
- JSX allows writing HTML-like syntax inside JavaScript.
- Babel converts JSX into JavaScript.
- JSX must return a single parent element.
- Every tag must be closed.
- Use `className` instead of `class`.
- JavaScript expressions are written inside `{}`.
- Fragments help avoid unnecessary div elements.
- JSX makes React code cleaner, easier to read, and easier to maintain.

---
---