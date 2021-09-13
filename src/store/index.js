import { configureStore } from "@reduxjs/toolkit";
import UiSlice from './Ui';
import ArtistsSlice from './Artists';
import UserSlice from './User'
const store=configureStore({reducer:{UI:UiSlice,Artists:ArtistsSlice,User:UserSlice}});
export default store;