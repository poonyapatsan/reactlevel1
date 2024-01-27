import { FC, useState } from "react";
 
const Counter: FC = ()  => {
  const [count, setCounter] = useState(0);
 
  return (
    <div>
      <button onClick={() => setCounter(count + 1)}> Increment by 1 </button>
      &nbsp;&nbsp;
      <button onClick={() => setCounter(count - 1)}> Decrement by 1 </button>
      <h2>{count}</h2>
    </div>
  );
};
 
export default Counter;