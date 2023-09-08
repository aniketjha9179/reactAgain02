import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(15);

  const handleAddValue = () => {
    setCount(count + 1);
  };

  const handleRemoveValue = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <p>hello</p>
      <h2>counter value: {count}</h2>
      <button onClick={handleAddValue}>Add values</button>
      <br />
      <button onClick={handleRemoveValue}>Remove value</button>
    </>
  );
}

export default App;
