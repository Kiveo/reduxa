import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { selectCount, increment, decrement, incrementByAmount, incrementAsync, decrementAsync } from './redux/counterSlice';

const buttonStyle = {
  padding: '1rem 2rem',
  margin: '0.25rem',
}

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        Testing Only
      <p>Count is: {count}</p>
        <button type="button" style={buttonStyle} onClick={() => dispatch(increment())}>ADD</button>
        <button type="button" style={buttonStyle} onClick={() => dispatch(incrementByAmount(2))}>ADD 2</button>
        <button type="button" style={buttonStyle} onClick={() => dispatch(incrementAsync(10))}>Delayed ADD 10</button>
        <button type="button" style={buttonStyle} onClick={() => dispatch(decrement())}>SUBTRACT</button>
        <button type="button" style={buttonStyle} onClick={() => dispatch(decrementAsync(10))}>Delayed Reduce 10</button>
      </header>
    </div >
  );
}

export default App;
