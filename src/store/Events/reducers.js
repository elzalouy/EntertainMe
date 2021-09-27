import { remove } from "lodash";

export const onHandleBookEvent = (state, action) => {
  action.payload.forEach((item) => {
    state.bookEvent[item.element] = item.value;
  });
};
export const onHandleBookEventArray = (state, action) => {
  const index = state.bookEvent[action.payload.element].indexOf(
    action.payload.value
  );
  index >= 0
    ? remove(
        state.bookEvent[action.payload.element],
        (item) => item === state.bookEvent[action.payload.element][index]
      )
    : state.bookEvent[action.payload.element].push(action.payload.value);
};
export const onHandleError = (state, action) => {
  state.error = action.payload;
};
const exports = { onHandleBookEvent, onHandleBookEventArray, onHandleError };
export default exports;
