import React from "react";

// const Card = (props) => { ==> this is common way for props 
const Card = ({Name="moti",newObj}) => {
  return (
    <div>
      <div className="h-44 w-44 border-2 border-red-500 rounded-2xl">
        {/* <h1>{Name || "your-name"}</h1> -> some time it is ureadable  */}
        <h1>{Name}</h1> 
        {/* in case name is not passed then by default value will be used here */}
      </div>
      <div className="h-44 w-44 border-2 border-red-500 rounded-2xl">
        <h1>{newObj.name}</h1>
        <h3>{newObj.age}</h3>
      </div>
    </div>
  );
};

export default Card;
