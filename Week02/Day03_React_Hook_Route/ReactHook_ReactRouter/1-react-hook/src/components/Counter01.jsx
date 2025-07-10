import { useState } from "react";

export default function Counter01() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
