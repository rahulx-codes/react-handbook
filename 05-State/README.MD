# React State

## 📌 What is State?

State is a special React feature that stores data inside a component.

State is used when data changes over time.

Examples:

- Counter value
- Input field data
- Like button status
- Notes app data
- Dark mode toggle

React automatically updates the UI when state changes.

---

# 🧠 Real Life Example

Imagine a room light.

- OFF → initial state
- ON → updated state

When switch changes, the room updates.

Same in React:
When state changes → UI updates automatically.

---

# 📌 useState Hook

React gives us a Hook called `useState`.

It helps us:

- Store data
- Update data
- Re-render UI

---

# 📌 Syntax

```jsx
const [state, setState] = useState(initialValue);
```
