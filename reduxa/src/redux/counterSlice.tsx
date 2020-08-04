import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './store';

// create a slice, to concisely define actions and reducers all in one
export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  }
});

// export the actions
export const { increment, decrement, incrementByAmount, decrementByAmount } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => { // ! what is standard type for dispatch? custom per or app wide?
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const decrementAsync = (amount: number) => (dispatch: (arg0: { payload: number; type: string; }) => void) => {
  setTimeout(() => {
    dispatch(decrementByAmount(amount));
  }, 2000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: { counter: { value: any; }; }) => state.counter.value;

// slice is left generic because it is the default export and contains the name: 'counter' implicitly
export default slice.reducer;