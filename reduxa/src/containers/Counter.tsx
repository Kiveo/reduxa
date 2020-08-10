import React from 'react';

const buttonStyle = {
  padding: '1rem 2rem',
  margin: '0.25rem',
}

const Counter = (props: any) => {
  return (
    <div id="counter">
      <p>Global Count is: <span id="globalCount">{props.count || 0}</span></p>
      <p>Global State Controls</p>
      <button type="button" id="addButton" style={buttonStyle} onClick={() => props.dispatch(props.increment())}>ADD</button>
      {/* // ! minimizing scope for testing redux and redux coverage report */}
      {/* <button type="button" style={buttonStyle} onClick={() => props.dispatch(props.incrementByAmount(2))}>ADD 2</button>
      <button type="button" style={buttonStyle} onClick={() => props.dispatch(props.incrementAsync(10))}>Delayed ADD 10</button>
      <button type="button" style={buttonStyle} onClick={() => props.dispatch(props.decrement())}>SUBTRACT</button>
      <button type="button" style={buttonStyle} onClick={() => props.dispatch(props.decrementAsync(10))}>Delayed Reduce 10</button> */}

      {/* <hr style={{ border: '1px solid black' }} />
      <p>Local Value is: <span id="localCount" data-test="localCount">{props.counter || 0}</span></p>
      <p>Local State Controls</p>
      <button type="button" style={buttonStyle} onClick={() => props.localIncrement()}>Increase Local Value</button>
      <button type="button" style={buttonStyle} onClick={() => props.localDecrement()}>Reduce Local Value</button> */}
    </div>
  )
}

export default Counter;