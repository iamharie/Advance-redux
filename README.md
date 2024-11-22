# Advance-redux

## Overview:
#### This project demonstrates advanced concepts and practical implementations of React and Redux using modern tools and patterns.

## Key Concepts Utilized:
#### Basic structure & concepts of react.
#### useState(), useEffect(), reusable UI components.

## react-redux; redux-toolkit; redux-thunk
#### react-redux: useDispatch(), useSelector()
#### redux-toolkit: 
#### createSlice()
```javascript
const mySliceOne = createSlice(
{name:'',
initialState,
reducers: methodOne(state,action){},
methodTwo(state,action){}
});
```
#### configureStore()
```javascript
const store = configureStore({
  reducer: { exampleOne: exOne.reducer, exampleTwo: exOne.reducer },
});
```
#### Async operations: Utilized/ created (Thunk), own action creator to acomplish the task to "put" and "get" request APIs from the backend (firebase)
