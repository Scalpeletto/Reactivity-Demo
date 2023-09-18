import React, { useState } from 'react';

export default function Counter(): JSX.Element {
  // https://reactjs.org/docs/hooks-overview.html
  const [count, setCount] = useState(0);

  function click(): void {
    setCount(count + 1);
  }

  return (
    <div>
      <p>
        You clicked
        {' '}
        {` ${count} `}
        {' '}
        times
      </p>
      <button type="button" onClick={click}>
        Click me
      </button>
    </div>
  );
}
