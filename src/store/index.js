import { configureStore } from "@reduxjs/toolkit";
import UiSlice from './Ui'

const store=configureStore({reducer:{UI:UiSlice}});
export default store;