// == Set initial state if needed
const initialState = {};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

// == Export
export default reducer;

/*
If several reducers needed, optional architecture would be :
- a folder with reducer name composed by
  - index.js,
  - actionCreators.js,
  - types.js
*/
