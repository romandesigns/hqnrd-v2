// "use client";

// import { getDictionary } from "@/get-dictionary";
// import { useState } from "react";

// export default function Counter({
//   dictionary,
// }: {
//   dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
// }) {
//   const [count, setCount] = useState(0);
//   return (
//     <p>
//       This component is rendered on client:
//       <button onClick={() => setCount((n) => n - 1)}>
//         {dictionary.decrement}
//       </button>
//       {count}
//       <button onClick={() => setCount((n) => n + 1)}>
//         {dictionary.increment}
//       </button>
//     </p>
//   );
// }

"use client";

import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

function useCounter() {
  return useStore(
    useShallow((store) => ({
      count: store.count,
      increment: store.increment,
      decrement: store.decrement,
      reset: store.reset,
    }))
  );
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
