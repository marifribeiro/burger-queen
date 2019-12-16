import React, { useState, useEffect } from 'react';

function Counter({initialCount}) {
    const num = 0;
    const [count, setCount] = useState(num);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(num)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }

  export default Counter