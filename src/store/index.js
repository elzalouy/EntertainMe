import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui";
import ArtistsSlice from "./Artists";
import CategoriesSlice from "./Categories";
const store = configureStore({
  reducer: { UI: UiSlice, Artists: ArtistsSlice , Categories: CategoriesSlice },
});
export default store;
