import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui";
import ArtistsSlice from "./Artists";
import CategoriesSlice from "./Categories";
import UserSlice from './User'
const store = configureStore({
  reducer: { UI: UiSlice, Artists: ArtistsSlice , Categories: CategoriesSlice, User:UserSlice },
});
export default store;
