# React Context API — Notes (`08_miniContext`)

## The Problem Context Solves

Imagine you have user data in `App.jsx` and you need it in `Profile.jsx`, which is deeply nested. Without Context, you'd have to pass it as props through every component in between — this is called **prop drilling**, and it gets messy fast.

> Context lets any component grab shared data directly, like a global variable but done the React way.

---

## The Three-File Pattern

Think of Context as having three roles, each played by a different file:

### 1. `UserContext.js` — The Container

```js
const UserContext = React.createContext();
```

This just creates an empty "box" that will hold your shared data. Nothing more.

---

### 2. `UserContextProvider.jsx` — The Supplier

```jsx
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

This wraps your app and **fills the box** with actual data (`user` and `setUser`). Any component inside it can access that data.

---

### 3. `Login.jsx` & `Profile.jsx` — The Consumers

```jsx
const { setUser } = useContext(UserContext); // Login — writes to context
const { user } = useContext(UserContext);    // Profile — reads from context
```

These components **reach into the box** and grab only what they need.

---

## The Data Flow

```
App
 └── UserContextProvider  (owns the state)
       ├── Login          (writes to context via setUser)
       └── Profile        (reads from context via user)
```

`Login` and `Profile` never talk to each other directly — they both just talk to the Context. That's the beauty of it.

---

## Key Takeaway

Context API follows a simple mental model:

> **One place owns the state, many places can use it.**

The Provider wraps → the consumers reach in. That's it.

Once you're comfortable here, you're ready to explore **Redux** or **Zustand**, which solve the same problem at a larger scale.
