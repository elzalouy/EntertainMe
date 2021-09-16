/**
 * onChangeFeaturedArtits()
 *
 *
 * change the state and replace the featured artitis.
 *
 *
 * @param {payload} action Payload to be changed in the state.
 */

export const onChangeCategories = (state, action) => {
  state.categories = action.payload.data;
};

export const onChangeCategory = (state, action) => {
  state.category = action.payload.data;
};

export const onChangeArtist= (state, action) => {
  state.artist = action.payload.data;
};

const exports = {
  onChangeCategories,
  onChangeCategory,
  onChangeArtist,
};

export default exports;
