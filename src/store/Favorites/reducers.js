import emptyState from "./emptyState";
import _ from "lodash";
export const setFavorite = (state, action) => {
  let favs = [...state.favourites];
  let index = favs.findIndex(
    (item) => item.artist_id === action.payload.artist_id
  );
  if (index < 0) {
    favs.push(action.payload);
    state.favourites = favs;
  }
};
export const setFavorites = (state, action) => {
  state.favourites = [...state.favourites, ...action.payload];
};
export const changeFavourites = (state, action) => {
  state.favourites = action.payload;
};
export const removeFavourite = (state, action) => {
  let favourites = [...state.favourites];
  favourites = _.filter(
    favourites,
    (item) => item.artist_id !== parseInt(action.payload)
  );
  state.favourites = [...favourites];
};
export const onHandleChangeFavourites = (state, action) => {
  action.payload.forEach((item) => {
    state[item.element] = item.data;
  });
};
export const onChangesState = (state, action) => {
  state = emptyState;
};
const exports = {
  setFavorite,
  setFavorites,
  changeFavourites,
  removeFavourite,
  onHandleChangeFavourites,
  onChangesState,
};
export default exports;
