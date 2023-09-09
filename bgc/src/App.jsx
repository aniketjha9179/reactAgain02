import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="justify-center gap-3 shadow-lg bg-white px-3 rounded-md">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full  shadow-xl bg-green-400"
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-xl bg-green-400"
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
                  onClick={()=>setColor('pink')}

          className="outline-none px-4 py-1 rounded-full  shadow-xl bg-green-400">
            pink
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full  shadow-xl bg-green-400"
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
