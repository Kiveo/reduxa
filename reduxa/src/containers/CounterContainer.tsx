import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, incrementByAmount, incrementAsync, decrement, decrementAsync, increment } from '../redux/counterSlice';
import Counter from './Counter';

const CounterContainer = () => {
  // State: a counter value
  const [counter, setCounter] = useState(0)
  // selecting global state
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // ! turning off local state stuff to focus on how to test redux components using RDTK/toolkit
  // local state handlers
  // const localIncrement = () => {
  //   setCounter(prevCounter => prevCounter + 1)
  // }
  // const localDecrement = () => {
  //   setCounter(prevCounter => prevCounter - 1)
  // }

  // View: the UI definition
  return (
    <Counter
      // localIncrement={localIncrement}
      // localDecrement={localDecrement}
      counter={counter}
      setCounter={setCounter}
      count={count}
      dispatch={dispatch}
      incrementByAmount={incrementByAmount}
      incrementAsync={incrementAsync}
      decrement={decrement}
      decrementAsync={decrementAsync}
      increment={increment}
    />
  )
}

export default CounterContainer;