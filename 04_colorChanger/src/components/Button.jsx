import React from "react";

export default function Button({ btnColor="#414141" }) {
  const btnEvent = () => {
    document.body.style.backgroundColor = btnColor;
  };
  return (
    <div>
      <button
        className="h-16 w-32 border-white border-2 rounded-2xl"
        onClick={btnEvent}
      >
        {btnColor}
      </button>
    </div>
  );
}
