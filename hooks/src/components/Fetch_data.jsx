import React, { useEffect, useState } from "react";

const Fetch_data = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div key={item.userId}>
          <h1>{item.userId}</h1>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};
// https://api.github.com/users/Lavishtodiwal
export default Fetch_data;
