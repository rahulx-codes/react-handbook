# React Components

Components are the building blocks of a React application.

Instead of writing all UI code in a single file, React allows us to divide the interface into small, reusable pieces called **components**.

---

# Why Components?

Imagine building a website without components.

Everything would be written in one large file:

- Navbar
- Sidebar
- Footer
- Buttons
- Forms
- Cards

As the application grows, managing the code becomes difficult.

Components solve this problem by breaking the UI into smaller reusable pieces.

---

# What is a Component?

A component is a JavaScript function that returns JSX.

Example:

```jsx
function Welcome() {
  return <h1>Hello React</h1>;
}
```

Here:

- `Welcome` is a component.
- It returns JSX.
- React renders the returned JSX on the screen.

---

# Real Life Example

Think of a house.

A house is made of:

- Doors
- Windows
- Rooms
- Kitchen

Each part has its own purpose.

Similarly, a React application is made of:

- Navbar Component
- Footer Component
- Card Component
- Button Component

These small pieces combine to create a complete application.

---

# Component Naming Rules

Component names must start with a capital letter.

✅ Correct

```jsx
function Header() {
  return <h1>Header</h1>;
}
```

❌ Incorrect

```jsx
function header() {
  return <h1>Header</h1>;
}
```

React treats lowercase names as HTML tags.

---

# Creating a Component

```jsx
function Greeting() {
  return <h2>Welcome to React</h2>;
}
```

---

# Using a Component

```jsx
function Greeting() {
  return <h2>Welcome to React</h2>;
}

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
```

Output:

```text
Welcome to React
```

---

# Reusing Components

One component can be used multiple times.

```jsx
function Greeting() {
  return <h2>Hello User</h2>;
}

function App() {
  return (
    <>
      <Greeting />
      <Greeting />
      <Greeting />
    </>
  );
}
```

Output:

```text
Hello User
Hello User
Hello User
```

This is called **reusability**.

---

# Types of Components

React mainly uses:

1. Functional Components
2. Class Components

---

## Functional Components

Modern React applications use functional components.

```jsx
function Welcome() {
  return <h1>Hello React</h1>;
}
```

Advantages:

- Simple
- Easy to read
- Less code
- Supports Hooks

---

## Class Components

Before Hooks, React commonly used class components.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}
```

Today, functional components are preferred.

---

# Component Tree

Components can contain other components.

Example:

```text
App
├── Navbar
├── Hero
├── About
├── Footer
```

React applications are organized as a component tree.

---

# Nested Components

A component can render another component.

```jsx
function Header() {
  return <h1>Header</h1>;
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

This is called nesting components.

---

# Component Benefits

### Reusability

Write once, use many times.

### Maintainability

Smaller files are easier to manage.

### Readability

Code becomes easier to understand.

### Scalability

Large applications become easier to build.

---

# Folder Structure Example

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   └── Button.jsx
│
├── App.jsx
└── main.jsx
```

---

# Component Workflow

```text
Create Component
       ↓
Return JSX
       ↓
Export Component
       ↓
Import Component
       ↓
Render Component
```

---

# Exporting a Component

```jsx
function Header() {
  return <h1>Header</h1>;
}

export default Header;
```

---

# Importing a Component

```jsx
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
    </>
  );
}
```

---

# Common Beginner Mistakes

### 1. Using lowercase component names

❌

```jsx
function navbar() {}
```

✅

```jsx
function Navbar() {}
```

---

### 2. Forgetting to export

❌

```jsx
function Navbar() {}
```

✅

```jsx
function Navbar() {}

export default Navbar;
```

---

### 3. Forgetting to import

❌

```jsx
<Navbar />
```

Without importing:

```jsx
import Navbar from "./Navbar";
```

---

# Pseudo Code

```text
Create Component
    ↓
Return JSX
    ↓
Export Component
    ↓
Import Component
    ↓
Use Component
    ↓
Render UI
```

---

# Interview Questions

### What is a React Component?

A reusable piece of UI that returns JSX.

---

### Why are components used?

To make applications reusable, maintainable, and scalable.

---

### What are the types of components?

- Functional Components
- Class Components

---

### Which component type is preferred today?

Functional Components.

---

### Why should component names start with a capital letter?

Because React distinguishes components from HTML elements using capitalization.

---

# Summary

- Components are the building blocks of React.
- Components are reusable pieces of UI.
- A component is usually a JavaScript function that returns JSX.
- Component names must start with a capital letter.
- Components can be nested inside other components.
- Functional components are the modern standard in React.
- Components improve code organization and reusability.
