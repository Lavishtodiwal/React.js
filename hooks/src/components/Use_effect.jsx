import React, { useEffect, useState } from "react";

const Use_effect = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);
  //   useEffect(() => {
  //     document.title = `${count} messages`;
  //   }, []); //when we give the empty array then it runs only ones || used for data fetching one time

  useEffect(() => {
    document.title = `${otherCount} messages`;
    console.log("upadated value", otherCount);
    return () => {
      console.log("clean up value ", otherCount);
    };
  }, [otherCount]);
  return (
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

      <h3>{otherCount}</h3>
      <button onClick={() => setOtherCount(otherCount + 5)}> count by 5</button>
    </div>
  );
};

export default Use_effect;
