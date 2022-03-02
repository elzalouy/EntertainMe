import _ from "lodash";
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
export const onChangeItem = (state, action) => {
  state[action.payload.element] = action.payload.data;
};

export const onLoadData = (state, action) => {
  let artists = [...state.selectedArtists];
  artists = _.concat(artists, action.payload);
  state.selectedArtists = artists;
};
export const onChangeFilter = (state, action) => {
  state.filter = action.payload;
};

export const onSetFilter = (state, action) => {
  state.selectedFilteredArtists = action.payload;
};

const exports = {
  onChangeCategories,
  onChangeCategory,
  onLoadData,
  onChangeItem,
  onChangeFilter,
  onSetFilter,
};

export default exports;
