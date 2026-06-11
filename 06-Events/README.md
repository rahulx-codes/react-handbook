# ⚛️ React Events — Complete Detailed Notes

A complete beginner-to-advanced guide for understanding **Events in React** with:

---

# 📚 Table of Contents

1. [Introduction to Events](#1️⃣-introduction-to-events)
2. [Why Events are Important](#2️⃣-why-events-are-important)
3. [Event Syntax in React](#3️⃣-event-syntax-in-react)
4. [Event Handlers](#4️⃣-event-handlers)
5. [Types of React Events](#5️⃣-types-of-react-events)
6. [Click Events](#6️⃣-click-events)
7. [Change Events](#7️⃣-change-events)
8. [Form Events](#8️⃣-form-events)
9. [Mouse Events](#9️⃣-mouse-events)
10. [Keyboard Events](#🔟-keyboard-events)
11. [Focus & Blur Events](#1️⃣1️⃣-focus--blur-events)
12. [Event Object](#1️⃣2️⃣-event-object)
13. [Synthetic Events](#1️⃣3️⃣-synthetic-events)
14. [Event Bubbling](#1️⃣4️⃣-event-bubbling)
15. [Event Capturing](#1️⃣5️⃣-event-capturing)
16. [stopPropagation()](#1️⃣6️⃣-stoppropagation)
17. [preventDefault()](#1️⃣7️⃣-preventdefault)
18. [Passing Arguments](#1️⃣8️⃣-passing-arguments-in-events)
19. [Inline vs Separate Handlers](#1️⃣9️⃣-inline-vs-separate-handlers)
20. [Controlled Components](#2️⃣0️⃣-controlled-components)
21. [Uncontrolled Components](#2️⃣1️⃣-uncontrolled-components)
22. [Event Binding](#2️⃣2️⃣-event-binding)
23. [Best Practices](#2️⃣3️⃣-best-practices)
24. [Common Mistakes](#2️⃣4️⃣-common-mistakes)
25. [Real Project Examples](#2️⃣5️⃣-real-project-examples)
26. [Interview Questions](#2️⃣6️⃣-react-events-interview-questions)
27. [Final Summary](#2️⃣7️⃣-final-summary)

---

# 1️⃣ Introduction to Events

Events are actions that happen in the browser.

These actions can be performed by:

- User
- Browser

Examples:

| Action             | Event          |
| ------------------ | -------------- |
| Click button       | `onClick`      |
| Type input         | `onChange`     |
| Submit form        | `onSubmit`     |
| Hover mouse        | `onMouseEnter` |
| Press keyboard key | `onKeyDown`    |

---

# 📌 Definition

> Events are user interactions that trigger functions in React applications.

---

# 2️⃣ Why Events are Important

Without events, websites become static.

Events help us:

- Handle user actions
- Make applications interactive
- Update UI dynamically
- Capture user input
- Build forms
- Build games
- Create dashboards

---

# 3️⃣ Event Syntax in React

React uses:

✅ camelCase event names
✅ JavaScript functions

---

## HTML Syntax

```html id="w2n8m1"
<button onclick="show()"></button>
```

---

## React Syntax

```jsx id="x7r5p2"
<button onClick={show}>
```

---

# 📌 Rules

| Rule               | Example                 |
| ------------------ | ----------------------- |
| camelCase          | `onClick`               |
| Function reference | `onClick={handleClick}` |

---

# ❌ Wrong

```jsx id="m5k2c8"
<button onClick="handleClick()">
```

---

# ✅ Correct

```jsx id="g8z1n6"
<button onClick={handleClick}>
```

---

# 4️⃣ Event Handlers

An event handler is a function that runs when an event occurs.

---

## Example

```jsx id="u9x3q7"
const handleClick = () => {
  console.log("Clicked");
};
```

---

## Using Handler

```jsx id="k4m7t1"
<button onClick={handleClick}>Click</button>
```

---

# 5️⃣ Types of React Events

| Category         | Events                 |
| ---------------- | ---------------------- |
| Mouse Events     | onClick, onDoubleClick |
| Input Events     | onChange               |
| Form Events      | onSubmit               |
| Keyboard Events  | onKeyDown              |
| Focus Events     | onFocus, onBlur        |
| Clipboard Events | onCopy, onPaste        |
| Touch Events     | onTouchStart           |

---

# 6️⃣ Click Events

Triggered when element is clicked.

---

## Example

```jsx id="n2w6v9"
function App() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

# 📌 Double Click Event

```jsx id="r4k8m2"
<button onDoubleClick={() => alert("Double Clicked")}>Double Click</button>
```

---

# 7️⃣ Change Events

Used to track input value changes.

---

## Example

```jsx id="q7x5p3"
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
```

---

# 📌 e.target.value

Gets current input value.

```jsx id="h3m9z6"
e.target.value;
```

---

# 📌 Why use onChange?

Used in:

- Forms
- Search bars
- Live previews
- Validation

---

# 8️⃣ Form Events

Used when form is submitted.

---

## Example

```jsx id="v8n2k5"
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

# 📌 preventDefault()

Stops page reload.

```jsx id="c5r1w8"
e.preventDefault();
```

---

# 📌 Why Important?

Without it:

❌ Form reloads page

With it:

✅ React handles form smoothly

---

# 9️⃣ Mouse Events

Mouse-related interactions.

---

| Event           | Meaning      |
| --------------- | ------------ |
| `onClick`       | Click        |
| `onDoubleClick` | Double click |
| `onMouseEnter`  | Mouse enters |
| `onMouseLeave`  | Mouse leaves |
| `onMouseMove`   | Mouse moving |

---

## Example

```jsx id="t1k7x9"
<h1 onMouseEnter={() => console.log("Entered")}>Hover Me</h1>
```

---

# 🔟 Keyboard Events

Used when user presses keyboard keys.

---

| Event       | Meaning      |
| ----------- | ------------ |
| `onKeyDown` | Key pressed  |
| `onKeyUp`   | Key released |

---

## Example

```jsx id="m8v4q2"
<input onKeyDown={(e) => console.log(e.key)} />
```

---

# 📌 e.key

Returns pressed key.

```jsx id="f7x3n1"
e.key;
```

---

# 1️⃣1️⃣ Focus & Blur Events

---

## onFocus

Runs when input gets focus.

```jsx id="j4m8t5"
<input onFocus={() => console.log("Focused")} />
```

---

## onBlur

Runs when input loses focus.

```jsx id="p6v2r9"
<input onBlur={() => console.log("Blurred")} />
```

---

# 1️⃣2️⃣ Event Object

React automatically provides an event object.

---

## Example

```jsx id="n9k5w1"
const handleClick = (e) => {
  console.log(e);
};
```

---

# 📚 Important Properties

| Property              | Meaning             |
| --------------------- | ------------------- |
| `e.target`            | Selected element    |
| `e.target.value`      | Input value         |
| `e.key`               | Pressed key         |
| `e.type`              | Event type          |
| `e.preventDefault()`  | Stop default action |
| `e.stopPropagation()` | Stop bubbling       |

---

# 1️⃣3️⃣ Synthetic Events

React uses Synthetic Events.

---

# 📌 Definition

> Synthetic Event is a wrapper around native browser events.

---

# 📌 Benefits

✅ Better performance
✅ Cross-browser compatibility
✅ Same behavior everywhere

---

# 📌 Native Event

```javascript id="y2m7q4"
addEventListener();
```

---

# 📌 React Event

```jsx id="b5n8x1"
onClick;
```

---

# 1️⃣4️⃣ Event Bubbling

Events move from:

Child → Parent

---

## Example

```jsx id="q8m2t6"
<div onClick={() => console.log("Parent")}>
  <button onClick={() => console.log("Child")}>Click</button>
</div>
```

---

## Output

```bash id="w7k3r1"
Child
Parent
```

---

# 📌 Why?

Button inside div.

Event first runs on button then parent div.

---

# 1️⃣5️⃣ Event Capturing

Opposite of bubbling.

Direction:

Parent → Child

---

# 📌 Capture Phase

```jsx id="g4v9m2"
onClickCapture;
```

---

## Example

```jsx id="r6x1n8"
<div onClickCapture={() => console.log("Parent")}>
  <button onClick={() => console.log("Child")}>Click</button>
</div>
```

---

# 1️⃣6️⃣ stopPropagation()

Stops bubbling.

---

## Example

```jsx id="z3k7m5"
const handleClick = (e) => {
  e.stopPropagation();
};
```

---

# 📌 Why Use?

Prevents parent event from running.

---

# 1️⃣7️⃣ preventDefault()

Stops default browser behavior.

---

## Example

```jsx id="a9n4x2"
e.preventDefault();
```

---

# 📌 Used In

- Forms
- Links
- Reload prevention

---

# 1️⃣8️⃣ Passing Arguments in Events

---

## Example

```jsx id="f2m8q7"
<button onClick={() => handleUser("Rahul")}>Click</button>
```

---

## Function

```jsx id="v5k1t3"
const handleUser = (name) => {
  console.log(name);
};
```

---

# 📌 Why Arrow Function?

Needed to pass arguments.

---

# 1️⃣9️⃣ Inline vs Separate Handlers

---

# 📌 Inline Handler

```jsx id="n4x9m1"
<button onClick={() => alert("Hello")}>
```

---

# 📌 Separate Handler

```jsx id="k8v3q6"
const handleClick = () => {
  alert("Hello");
};
```

---

# 📌 Best Choice?

✅ Separate handlers for cleaner code.

---

# 2️⃣0️⃣ Controlled Components

Input controlled using React state.

---

## Example

```jsx id="m7k2x8"
const [name, setName] = useState("");

<input value={name} onChange={(e) => setName(e.target.value)} />;
```

---

# 📌 Benefits

✅ Better control
✅ Validation
✅ Dynamic UI

---

# 2️⃣1️⃣ Uncontrolled Components

Input controlled using DOM.

Uses:

```jsx id="p3m9t5"
useRef();
```

---

## Example

```jsx id="y8v2n6"
const inputRef = useRef();

<input ref={inputRef} />;
```

---

# 2️⃣2️⃣ Event Binding

In class components:

```jsx id="c6k1m4"
this.handleClick = this.handleClick.bind(this);
```

Mostly not needed in functional components.

---

# 2️⃣3️⃣ Best Practices

✅ Use meaningful handler names
✅ Keep JSX clean
✅ Reuse handlers
✅ Use separate handlers
✅ Use controlled components
✅ Use preventDefault in forms
✅ Avoid unnecessary inline functions

---

# 2️⃣4️⃣ Common Mistakes

---

## ❌ Calling function directly

```jsx id="q5x8m3"
<button onClick={handleClick()}>
```

---

## ✅ Correct

```jsx id="w1n6k9"
<button onClick={handleClick}>
```

---

## ❌ Forgetting preventDefault()

Causes page reload.

---

## ❌ Too much inline logic

Bad readability.

---

# 2️⃣5️⃣ Real Project Examples

---

# 📌 Toggle Password

```jsx id="u7m4q2"
<input type={show ? "text" : "password"} />
```

---

# 📌 Search Input

```jsx id="b9x3n5"
<input onChange={(e) => setSearch(e.target.value)} />
```

---

# 📌 Like Button

```jsx id="t2k8v1"
<button onClick={() => setLike(!like)}>Like</button>
```

---

# 📌 Form Validation

```jsx id="r5m1x7"
if (name === "") {
  alert("Required");
}
```

---

# 2️⃣6️⃣ React Events Interview Questions

---

## 1. What are Events in React?

User interactions handled by React.

---

## 2. Difference between HTML and React events?

| HTML      | React     |
| --------- | --------- |
| lowercase | camelCase |
| string    | function  |

---

## 3. What is Synthetic Event?

Wrapper around native browser events.

---

## 4. What is preventDefault()?

Stops default browser action.

---

## 5. What is Event Bubbling?

Event travels child → parent.

---

## 6. What is stopPropagation()?

Stops bubbling.

---

## 7. Difference between onKeyDown and onKeyUp?

| Event     | Meaning |
| --------- | ------- |
| onKeyDown | Press   |
| onKeyUp   | Release |

---

## 8. What is Controlled Component?

Input controlled by React state.

---

## 9. Why use arrow functions in events?

To pass arguments.

---

## 10. Difference between:

```jsx id="e1n8q3"
onClick = { handleClick };
```

and

```jsx id="m4v7k2"
onClick={handleClick()}
```

First passes reference.
Second immediately executes.

---

# 2️⃣7️⃣ Final Summary

React Events make applications interactive.

Using events we can:

✅ Handle clicks
✅ Capture input values
✅ Work with forms
✅ Detect keyboard keys
✅ Handle mouse interactions
✅ Build dynamic applications

Events are one of the most important concepts in React development.
