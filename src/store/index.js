import { configureStore } from "@reduxjs/toolkit";
import UiSlice from './Ui';
import ArtistsSlice from './Artists';
const store=configureStore({reducer:{UI:UiSlice,Artists:ArtistsSlice}});
export default store;