# Handle User Input, Validate Forms & Submit Data in React

# 📌 Introduction

Forms are one of the most important parts of React applications.

In real projects, forms are used for:

- Login
- Signup
- Contact Forms
- Search
- Feedback
- Notes App
- Payment Forms

A complete React form mainly does 3 things:

1. Handle User Input
2. Validate Form Data
3. Submit Data

---

# 📚 Topics Covered

1. Handle User Input
2. onChange Event
3. Storing Data in State
4. Form Validation
5. Error Handling
6. Form Submission
7. preventDefault()
8. Complete Form Example
9. Best Practices
10. Interview Questions

---

# 1️⃣ Handle User Input

# 📌 What is User Input?

When a user types something inside an input field.

Example:

- Name
- Email
- Password

React handles input using:

- `useState`
- `onChange`

---

# 📌 Basic Flow

```text id="dr6n1o"
User Types → onChange Event → State Update → UI Update
```

---

# 📌 Basic Example

```jsx id="x8owdw"
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
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

## Step 1 → Create State

```jsx id="i5fcr9"
const [name, setName] = useState("");
```

Stores input value.

---

## Step 2 → Connect value

```jsx id="sjiyc2"
value = { name };
```

Input value comes from state.

---

## Step 3 → Handle onChange

```jsx id="k4rvv9"
onChange={(e) => setName(e.target.value)}
```

Updates state when user types.

---

# 📌 e.target.value

```jsx id="w2wzv7"
e.target.value;
```

Means:
👉 Current value of input field.

---

# 📌 Multiple Inputs Example

```jsx id="rr92fq"
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    </div>
  );
}

export default App;
```

---

# 📌 Dynamic Key

```jsx id="4zq4d5"
[name]: value
```

Updates correct field dynamically.

---

# 2️⃣ Validate Forms

# 📌 What is Validation?

Validation means checking whether user input is correct or not.

Examples:

- Empty field
- Invalid email
- Short password

---

# 📌 Why Validation is Important?

✅ Prevent wrong data
✅ Improve security
✅ Better user experience
✅ Clean database data

---

# 📌 Basic Validation Example

```jsx id="l0yol3"
if (name === "") {
  alert("Name is required");
}
```

---

# 📌 Email Validation

```jsx id="d51h1k"
if (!email.includes("@")) {
  alert("Invalid Email");
}
```

---

# 📌 Password Validation

```jsx id="slv1l4"
if (password.length < 6) {
  alert("Password must be 6 characters");
}
```

---

# 📌 Full Validation Example

```jsx id="3wrps3"
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

  const validateForm = () => {
    if (formData.name === "") {
      alert("Name is required");
      return false;
    }

    if (!formData.email.includes("@")) {
      alert("Invalid Email");
      return false;
    }

    if (formData.password.length < 6) {
      alert("Password too short");
      return false;
    }

    return true;
  };

  return (
    <div>
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

      <button onClick={validateForm}>Validate</button>
    </div>
  );
}

export default App;
```

---

# 📌 Validation Flow

```text id="0z8md3"
User Submit → Check Data → If Wrong Show Error → If Correct Continue
```

---

# 📌 Common Validation Rules

| Validation        | Example              |
| ----------------- | -------------------- |
| Required Field    | Name cannot be empty |
| Email Validation  | Must contain @       |
| Password Length   | Minimum 6 chars      |
| Number Validation | Only numbers allowed |

---

# 3️⃣ Submit Data

# 📌 What is Form Submission?

Sending form data:

- Backend
- API
- Database
- Console

---

# 📌 onSubmit Event

```jsx id="e7py4g"
<form onSubmit={handleSubmit}>
```

Runs when form submits.

---

# 📌 preventDefault()

```jsx id="t2fz2k"
e.preventDefault();
```

Stops page refresh.

---

# 📌 Basic Submit Example

```jsx id="g7cvw1"
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

---

# 📌 Submit Flow

```text id="g7twc2"
User Click Submit → handleSubmit Runs → Validate → Send Data
```

---

# 4️⃣ Complete Real Form Example

```jsx id="0o8z38"
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

    // Validation
    if (formData.name === "") {
      alert("Name is required");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Invalid Email");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password too short");
      return;
    }

    // Submit Data
    console.log(formData);

    alert("Form Submitted Successfully");

    // Reset Form
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

# 📌 Step-by-Step Working

## Step 1

User types data.

---

## Step 2

`handleChange()` updates state.

---

## Step 3

User clicks submit button.

---

## Step 4

`handleSubmit()` runs.

---

## Step 5

Validation checks data.

---

## Step 6

If valid:

- Submit data
- Reset form

---

# 📌 Form Reset

```jsx id="jlwmff"
setFormData({
  name: "",
  email: "",
  password: "",
});
```

Clears all input fields.

---

# 📌 Best Practices

## ✅ Use Controlled Components

React should control form data.

---

## ✅ Use One Object State

Better for large forms.

---

## ✅ Validate Before Submit

Always check user input.

---

## ✅ Use Meaningful Input Names

```jsx id="7uq4rt"
name = "email";
```

---

## ✅ Use preventDefault()

Avoid page refresh.

---

# ❌ Common Mistakes

# ❌ Forgetting onChange

```jsx id="z1h6ua"
<input value={name} />
```

Input becomes read-only.

---

# ❌ Direct State Mutation

Wrong:

```jsx id="3okc2n"
formData.name = "Rahul";
```

Correct:

```jsx id="v7t4wn"
setFormData({
  ...formData,
  name: "Rahul",
});
```

---

# ❌ Forgetting preventDefault

Page refreshes unexpectedly.

---

# 🎯 Interview Questions

# Q1. What is controlled component?

A form component controlled by React state.

---

# Q2. Why use onChange?

To update state when input changes.

---

# Q3. What is e.target.value?

Current value of input field.

---

# Q4. Why use preventDefault()?

To stop form refresh behavior.

---

# Q5. Why validate forms?

To prevent invalid data submission.

---

# Q6. What is dynamic key?

```jsx id="yc1n34"
[name]: value
```

Updates object field dynamically.

---

# 📌 Final Revision

## Most Important Concepts

✅ useState
✅ onChange
✅ value
✅ handleChange
✅ handleSubmit
✅ Validation
✅ preventDefault
✅ Dynamic Key
✅ Form Reset

---

# 🚀 Practice Projects

1. Login Form
2. Signup Form
3. Contact Form
4. Todo Form
5. Notes App Form

---

# 🎯 End Goal

After learning this topic, you should be able to:

✅ Handle user input
✅ Validate forms
✅ Submit form data
✅ Build real-world forms in React

---
