# 07 - Forms in React

# 📌 Introduction

Forms are used to collect user data in React applications.

Examples:

- Login Form
- Signup Form
- Contact Form
- Search Box
- Feedback Form

In React, forms are handled using **state**.

---

# 📚 Topics Covered

1. What is Form in React
2. Controlled Components
3. Uncontrolled Components
4. Handling Input Fields
5. Handling Multiple Inputs
6. Textarea in React
7. Select Dropdown
8. Checkbox Handling
9. Radio Button Handling
10. Form Submit
11. Prevent Default
12. Form Validation
13. Dynamic Forms
14. Reset Form
15. Best Practices
16. Common Mistakes
17. Interview Questions

---

# 1️⃣ What is Form in React?

A form is a collection of input fields used to take data from users.

React controls form data using:

- `useState()`
- Event Handling
- Controlled Components

---

# 2️⃣ Controlled Components

A controlled component means:

✅ React controls the input value using state.

## Flow

```text
Input Field → onChange Event → State Update → UI Update
```

## Example

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{name}</h2>
    </div>
  );
}

export default App;
```

---

# 📌 Explanation

## value

```jsx
value = { name };
```

Input value comes from state.

---

## onChange

```jsx
onChange={(e) => setName(e.target.value)}
```

Updates state whenever user types.

---

# 3️⃣ Uncontrolled Components

Uncontrolled components use:

- `useRef()`
- DOM directly controls input

## Example

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}

export default App;
```

---

# 📌 Controlled vs Uncontrolled

| Controlled          | Uncontrolled      |
| ------------------- | ----------------- |
| React controls data | DOM controls data |
| Uses state          | Uses ref          |
| Easy validation     | Less control      |
| Recommended         | Rarely used       |

---

# 4️⃣ Handling Input Fields

## Text Input

```jsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

---

## Password Input

```jsx
<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

---

## Number Input

```jsx
<input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
```

---

# 5️⃣ Handling Multiple Inputs

Instead of multiple states, use one object state.

## Example

```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
```

---

# 📌 Important Concept

## Dynamic Key

```jsx
[name]: value
```

This updates specific field dynamically.

---

# 6️⃣ Textarea in React

## Example

```jsx
<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
></textarea>
```

---

# 7️⃣ Select Dropdown

## Example

```jsx
<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
</select>
```

---

# 8️⃣ Checkbox Handling

Checkbox uses:

- `checked`
- `e.target.checked`

## Example

```jsx
const [accept, setAccept] = useState(false);

<input
  type="checkbox"
  checked={accept}
  onChange={(e) => setAccept(e.target.checked)}
/>;
```

---

# 📌 checked vs value

| checked  | value      |
| -------- | ---------- |
| Checkbox | Text Input |

---

# 9️⃣ Radio Button Handling

## Example

```jsx
const [gender, setGender] = useState("");

<input
  type="radio"
  value="Male"
  checked={gender === "Male"}
  onChange={(e) => setGender(e.target.value)}
/>

<input
  type="radio"
  value="Female"
  checked={gender === "Female"}
  onChange={(e) => setGender(e.target.value)}
/>
```

---

# 🔟 Form Submit

## Example

```jsx
function handleSubmit(e) {
  e.preventDefault();

  console.log(formData);
}
```

```jsx
<form onSubmit={handleSubmit}>
```

---

# 1️⃣1️⃣ preventDefault()

## Why use it?

Normally form refreshes page after submit.

```jsx
e.preventDefault();
```

Stops page refresh.

---

# 1️⃣2️⃣ Form Validation

Validation checks if user input is correct.

---

## Basic Validation Example

```jsx
if (name === "") {
  alert("Name is required");
}
```

---

## Email Validation

```jsx
if (!email.includes("@")) {
  alert("Invalid Email");
}
```

---

## Password Validation

```jsx
if (password.length < 6) {
  alert("Password too short");
}
```

---

# 1️⃣3️⃣ Dynamic Forms

Dynamic forms are generated using arrays.

## Example

```jsx
const fields = ["name", "email", "password"];
```

```jsx
{
  fields.map((field) => <input key={field} name={field} placeholder={field} />);
}
```

---

# 1️⃣4️⃣ Reset Form

## Example

```jsx
setFormData({
  name: "",
  email: "",
  password: "",
});
```

---

# 1️⃣5️⃣ Best Practices

## ✅ Use Controlled Components

React should control form data.

---

## ✅ Use Single State Object

Better for large forms.

---

## ✅ Keep Validation Simple

Validate before submit.

---

## ✅ Use Meaningful Names

```jsx
name = "email";
```

---

## ✅ Prevent Empty Submissions

Always validate inputs.

---

# 1️⃣6️⃣ Common Mistakes

## ❌ Forgetting onChange

```jsx
<input value={name} />
```

This makes input read-only.

---

## ❌ Not Using preventDefault

Page refreshes unexpectedly.

---

## ❌ Mutating State Directly

Wrong:

```jsx
formData.name = "Rahul";
```

Correct:

```jsx
setFormData({
  ...formData,
  name: "Rahul",
});
```

---

# 📌 Complete Form Example

```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

---

# 🔥 Advanced Concepts

- Form Validation Libraries
- Formik
- React Hook Form
- Yup Validation
- Dynamic Nested Forms
- File Upload Forms
- Multi Step Forms

---

# 📌 React Hook Form

Popular library for forms.

Benefits:

- Fast
- Less re-render
- Easy validation

---

# 📌 Formik

Another popular form library.

Features:

- Validation
- Error handling
- Form management

---

# 🎯 Interview Questions

# Beginner Level

## Q1. What is a controlled component?

A component whose form data is controlled by React state.

---

## Q2. Why use onChange?

To update state whenever input changes.

---

## Q3. What is e.target.value?

Current value of input field.

---

## Q4. Why use preventDefault()?

To stop page refresh on form submit.

---

# Intermediate Level

## Q5. Difference between controlled and uncontrolled components?

| Controlled     | Uncontrolled |
| -------------- | ------------ |
| Uses state     | Uses ref     |
| React controls | DOM controls |

---

## Q6. Why use single object state in forms?

Makes large forms easier to manage.

---

## Q7. What is dynamic key in forms?

```jsx
[name]: value
```

Updates field dynamically.

---

# Advanced Level

## Q8. Why React Hook Form is faster?

Because it reduces unnecessary re-renders.

---

## Q9. Why form validation is important?

Prevents invalid or empty data submission.

---

# 📌 Summary

React forms mainly use:

- useState
- onChange
- value
- handleSubmit
- preventDefault

Important concepts:

- Controlled Components
- Validation
- Multiple Inputs
- Checkbox Handling
- Radio Buttons
- Dynamic Forms

---

# 🚀 Final Revision Notes

## Most Important Topics

✅ Controlled Components
✅ onChange
✅ value
✅ handleSubmit
✅ preventDefault
✅ Multiple Inputs
✅ Checkbox
✅ Radio Button
✅ Validation
✅ Dynamic Forms

---

# 📚 Practice Projects

1. Login Form
2. Signup Form
3. Contact Form
4. Notes App Form
5. Todo Form
6. Multi Step Form
7. Feedback Form

---

# 🎯 End Goal

After learning React Forms, you should be able to:

- Handle user input
- Validate forms
- Submit data
---
