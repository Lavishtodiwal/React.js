import React, { useState } from "react";

const Use_state = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <div>
      <div>
        <h1>Counter:{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          decrease
        </button>
      </div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>
    </div>
  );
};

export default Use_state;
