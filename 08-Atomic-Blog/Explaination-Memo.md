Sure, let's dive into the details of `memo`, `useMemo`, and `useCallback` in React. These are used for performance optimization by controlling when components re-render and when functions or values are recalculated.

### `memo`

`memo` is a higher-order component that memoizes a functional component. It prevents a component from re-rendering if its props haven't changed. It's similar to `PureComponent` in class components.

#### Example:

```javascript
import React, { memo, useState } from 'react';

// A child component that only re-renders when its props change
const Child = memo(({ count }) => {
  console.log('Child rendered');
  return <div>Count: {count}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(!other)}>Toggle Other State</button>
      <Child count={count} />
    </div>
  );
}

export default App;
```

#### Explanation:
- `Child` is memoized using `memo`.
- `Child` only re-renders if the `count` prop changes.
- Changing the `other` state in `App` does not cause `Child` to re-render.

### `useMemo`

`useMemo` is a hook that memoizes a computed value. It only recalculates the value when one of its dependencies changes. This is useful for expensive computations that should not run on every render.

#### Example:

```javascript
import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // An expensive computation
  const expensiveComputation = (num) => {
    console.log('Running expensive computation');
    return num * 2;
  };

  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(!other)}>Toggle Other State</button>
      <div>Memoized Value: {memoizedValue}</div>
    </div>
  );
}

export default App;
```

#### Explanation:
- `expensiveComputation` is a function that performs a costly calculation.
- `useMemo` memoizes the result of `expensiveComputation(count)`.
- The expensive computation only runs when `count` changes, not on every render.

### `useCallback`

`useCallback` is a hook that memoizes a callback function. It returns a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

#### Example:

```javascript
import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // Memoize the callback function
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(!other)}>Toggle Other State</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
```

#### Explanation:
- `handleClick` is a memoized callback function.
- `useCallback` ensures `handleClick` remains the same between renders unless its dependencies change.
- `Child` will not re-render when `App` re-renders unless `handleClick` changes.

### Summary

- **`memo`**: Prevents a component from re-rendering if its props haven't changed.
- **`useMemo`**: Memoizes a computed value, only recalculating it when dependencies change. Useful for optimizing expensive calculations.
- **`useCallback`**: Memoizes a callback function, ensuring it remains the same between renders unless dependencies change. Useful for preventing unnecessary re-renders in optimized child components.

These tools help optimize performance by reducing unnecessary re-renders and recalculations, especially in complex or large applications.