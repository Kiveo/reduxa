import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, incrementByAmount, incrementAsync, decrement, decrementAsync, increment } from '../redux/counterSlice';

const buttonStyle = {
  padding: '1rem 2rem',
  margin: '0.25rem',
}

const Counter = () => {
  // State: a counter value
  const [counter, setCounter] = useState(0)
  // selecting global state
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // local state handlers
  const localIncrement = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
  const localDecrement = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div id="counter">
      <p>Global Count is: {count}</p>
      <p>Global State Controls</p>
      <button type="button" style={buttonStyle} onClick={() => dispatch(increment())}>ADD</button>
      <button type="button" style={buttonStyle} onClick={() => dispatch(incrementByAmount(2))}>ADD 2</button>
      <button type="button" style={buttonStyle} onClick={() => dispatch(incrementAsync(10))}>Delayed ADD 10</button>
      <button type="button" style={buttonStyle} onClick={() => dispatch(decrement())}>SUBTRACT</button>
      <button type="button" style={buttonStyle} onClick={() => dispatch(decrementAsync(10))}>Delayed Reduce 10</button>

      <hr style={{ border: '1px solid black' }} />
      <p>Local Value is: {counter}</p>
      <p>Local State Controls</p>
      <button type="button" style={buttonStyle} onClick={() => localIncrement()}>Increase Local Value</button>
      <button type="button" style={buttonStyle} onClick={() => localDecrement()}>Reduce Local Value</button>
    </div>
  )
}

export default Counter;