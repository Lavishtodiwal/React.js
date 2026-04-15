# ⚛️ React Interview Questions & Answers (100+)

> 📚 Complete React Interview Preparation Guide
> 🎯 Beginner → Intermediate → Advanced → Scenario-Based

---

# 🟢 1. Basic Questions (1–25)

### ❓ What is React?

React is a JavaScript library for building user interfaces.

### ❓ Who developed React?

React was developed by Meta (Facebook).

### ❓ What is a component?

Reusable UI building block.

### ❓ Types of components?

* Functional Components ✅
* Class Components (Legacy)

### ❓ What is JSX?

Syntax that allows writing HTML in JavaScript.

### ❓ What is Virtual DOM?

A lightweight copy of real DOM for faster updates.

### ❓ Props vs State?

| Props              | State   |
| ------------------ | ------- |
| Immutable          | Mutable |
| Passed from parent | Local   |

### ❓ What is useState?

Hook to manage state.

### ❓ What is useEffect?

Hook for side effects.

### ❓ What is key in React?

Unique identifier in lists.

### ❓ Controlled component?

Input managed by React.

### ❓ Uncontrolled component?

Input managed by DOM.

### ❓ What is Fragment?

Wrapper without extra DOM node.

### ❓ What is conditional rendering?

Render UI based on condition.

### ❓ What is SPA?

Single Page Application.

---

# 🟡 2. Intermediate Questions (26–60)

### ❓ What are hooks?

Functions to use state & lifecycle.

### ❓ Rules of hooks?

* Only call at top level
* Only inside React functions

### ❓ What is useContext?

Global state management.

### ❓ What is prop drilling?

Passing props deeply.

### ❓ What is React Router?

Library for navigation.

### ❓ What is lazy loading?

Load components on demand.

### ❓ What is Suspense?

Fallback UI during loading.

### ❓ What is React.memo?

Prevents unnecessary re-renders.

### ❓ useMemo vs useCallback?

| useMemo        | useCallback       |
| -------------- | ----------------- |
| Memoizes value | Memoizes function |

### ❓ What is reconciliation?

Process of updating DOM.

### ❓ What is ref?

Direct DOM access.

### ❓ What is custom hook?

Reusable logic function.

### ❓ What is HOC?

Higher Order Component.

### ❓ What is error boundary?

Handles runtime errors.

### ❓ What is SSR?

Server-side rendering.

### ❓ What is CSR?

Client-side rendering.

### ❓ What is Redux?

State management library.

---

# 🔴 3. Advanced Questions (61–90)

### ❓ How React works internally?

Virtual DOM + Diffing + Reconciliation.

### ❓ What causes re-render?

* State change
* Props change

### ❓ How to optimize performance?

* React.memo
* useMemo
* useCallback

### ❓ What is debounce?

Delays execution.

### ❓ What is throttle?

Limits execution rate.

### ❓ What is stale closure?

Old state captured in function.

### ❓ How to fix stale closure?

Use functional updates.

### ❓ What is cleanup in useEffect?

Function to clean side effects.

```js
useEffect(() => {
  return () => console.log("cleanup");
}, []);
```

### ❓ What is dependency array?

Controls when effect runs.

### ❓ What is tree shaking?

Removes unused code.

### ❓ What is bundler?

Tool like Vite/Webpack.

### ❓ What is concurrent rendering?

Improves responsiveness.

### ❓ What is memoization?

Caching results.

### ❓ What is pure component?

Avoids unnecessary re-render.

---

# 🧠 4. Scenario-Based Questions (91–110)

### ❓ Component re-rendering too much?

👉 Use React.memo / useMemo

### ❓ API call repeating?

👉 Fix dependency array

### ❓ Input lag?

👉 Use debounce / optimization

### ❓ Large list slow?

👉 Use virtualization

### ❓ Props drilling issue?

👉 Use Context API

### ❓ When to use Redux?

👉 Large applications

### ❓ SEO issue?

👉 Use SSR (Next.js)

### ❓ Best folder structure?

```
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── services/
```

### ❓ How to reuse logic?

👉 Custom hooks

### ❓ How to handle errors?

👉 try-catch + Error Boundary

---

# 🚀 Final Tips

* Build projects (VERY IMPORTANT)
* Revise daily
* Practice coding questions
* Explain concepts clearly

---

# 📌 Summary

React = Components + Props + State + Hooks

👉 Master these = Crack Interviews 💯

---
