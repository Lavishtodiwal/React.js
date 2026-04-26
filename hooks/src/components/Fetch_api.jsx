import React, { useEffect, useState } from "react";

const Fetch_api = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Fetched Data</h2>

      {data.map((item) => (
        <div>
          <h4>{item.name}</h4>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch_api;
