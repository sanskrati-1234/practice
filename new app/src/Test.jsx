import React, { useEffect, useRef, useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create a new AbortController for the new request
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    fetch(`https://fakestoreapi.com/products/${count}`, { signal }).then(
      (data) => data.json()
    );
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
}

export default Test;
