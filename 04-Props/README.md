# 04 - Props

## What are Props?

Props stands for **Properties**.

Props are used to pass data from a Parent Component to a Child Component.

Think of props like function arguments.

✅ Parent sends data.

✅ Child receives data.

---

## Why Do We Need Props?

Without props, every component would display the same hardcoded data.

Props allow components to become reusable.

Example:

Instead of creating:

- Rahul Card
- Mohan Card
- Aman Card

We create one Card component and pass different data using props.

---

# Parent Component

```jsx
import Card from "./Card";

function App() {
  return (
    <>
      <Card name="Rahul" />
      <Card name="Mohan" />
      <Card name="Aman" />
    </>
  );
}

export default App;
```

---

# Child Component

```jsx
function Card(props) {
  return <h2>Hello {props.name}</h2>;
}

export default Card;
```

---

# Output

```text
Hello Rahul
Hello Mohan
Hello Aman
```

---

# How Props Work

## Step 1

Parent sends data.

```jsx
<Card name="Rahul" />
```

## Step 2

React creates an object.

```js
{
  name: "Rahul";
}
```

## Step 3

Child receives that object.

```jsx
function Card(props) {
  console.log(props);
}
```

Output:

```js
{
  name: "Rahul";
}
```

---

# Accessing Props

```jsx
function Card(props) {
  return <h1>{props.name}</h1>;
}
```

---

# Multiple Props

## Parent

```jsx
<Card name="Rahul" age={22} skill="React" />
```

## Child

```jsx
function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <h4>{props.skill}</h4>
    </>
  );
}
```

---

# Props Using Destructuring

Instead of:

```jsx
function Card(props) {
  return <h1>{props.name}</h1>;
}
```

Use:

```jsx
function Card({ name }) {
  return <h1>{name}</h1>;
}
```

Multiple values:

```jsx
function Card({ name, age, skill }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{skill}</h4>
    </>
  );
}
```

✅ Cleaner

✅ Easier to read

---

# Passing String Props

```jsx
<Card name="Rahul" />
```

---

# Passing Number Props

```jsx
<Card age={22} />
```

---

# Passing Boolean Props

```jsx
<Card isStudent={true} />
```

---

# Passing Array Props

## Parent

```jsx
<Card skills={["React", "Java", "DSA"]} />
```

## Child

```jsx
function Card({ skills }) {
  return <h2>{skills.join(", ")}</h2>;
}
```

Output:

```text
React, Java, DSA
```

---

# Passing Object Props

## Parent

```jsx
<Card
  user={{
    name: "Rahul",
    age: 22,
  }}
/>
```

## Child

```jsx
function Card({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
    </>
  );
}
```

---

# Passing Function as Props

A parent can send a function to a child.

## Parent

```jsx
function App() {
  const showMessage = () => {
    alert("Hello");
  };

  return <Card clickHandler={showMessage} />;
}
```

## Child

```jsx
function Card({ clickHandler }) {
  return <button onClick={clickHandler}>Click Me</button>;
}
```

---

# Children Prop

Anything written between opening and closing tags becomes a special prop called children.

## Parent

```jsx
<Card>
  <h1>Hello Rahul</h1>
</Card>
```

## Child

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

Output:

```text
Hello Rahul
```

---

# Props are Read Only

[-] Wrong

```jsx
function Card(props) {
  props.name = "Aman";
}
```

Props should never be modified.

---

# Props Flow

```text
Parent Component
        |
        v
      Props
        |
        v
Child Component
```

Props always flow:

```text
Top → Bottom
Parent → Child
```

This is called:

**One-Way Data Flow**

---

# Real Example

## App.jsx

```jsx
import Card from "./Card";

function App() {
  return (
    <>
      <Card name="Rahul" age={22} skill="React" />

      <Card name="Mohan" age={25} skill="Java" />
    </>
  );
}

export default App;
```

## Card.jsx

```jsx
function Card({ name, age, skill }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Skill: {skill}</p>
    </div>
  );
}

export default Card;
```

---

# Interview Questions

## What are Props?

Props are used to pass data from a Parent Component to a Child Component.

---

## What does Props stand for?

Properties.

---

## Are Props mutable?

No.

Props are read-only.

---

## Can we pass functions as Props?

Yes.

---

## Can we pass arrays and objects as Props?

Yes.

---

## What is children Prop?

A special prop that contains content written between component tags.

---

## What is One-Way Data Flow?

Data moves only from Parent → Child.

---

# Quick Revision

✅ Props = Properties

✅ Used to pass data

✅ Parent sends data

✅ Child receives data

✅ Props are read-only

✅ Can pass strings

✅ Can pass numbers

✅ Can pass booleans

✅ Can pass arrays

✅ Can pass objects

✅ Can pass functions

✅ Supports children prop

✅ One-Way Data Flow (Parent → Child)
