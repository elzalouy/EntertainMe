import { UiActions } from ".";
import { EventsActions } from "../Events";
import { FavoritesActions } from "../Favorites";
import jwtDecode from "jwt-decode";
import { getEventsByUser } from "../../httpService/event";
import { getFavourites } from "../../httpService/favourites";
export const checkUser = () => {
  return async (dispatch) => {
    let token = localStorage.getItem("x-auth-token");
    if (token) {
      let tokenData = jwtDecode(token);
      if (Date.now() >= tokenData?.exp * 1000) {
        token = null;
        localStorage.removeItem("x-auth-token");
        dispatch(
          UiActions.onHandleUiChange([{ element: "logged", value: false }])
        );
        dispatch(EventsActions.onChangeAllState());
        dispatch(UiActions.onChangeAllState());
        dispatch(FavoritesActions.onChangesState());
      } else {
        dispatch(onGetUserFav());
        dispatch(
          UiActions.onHandleUiChange([{ element: "logged", value: true }])
        );
      }
    }
  };
};
export const onGetUserBookings = () => {
  return async (dispatch) => {
    let bookings = await getEventsByUser();
    if (bookings) {
      dispatch(
        EventsActions.onChangeUserItems([
          { element: "userBookings", data: bookings?.data },
        ])
      );
    }
  };
};
export const onGetUserFav = () => {
  return async (dispatch) => {
    let favourites = await getFavourites();
    if (favourites) {
      dispatch(FavoritesActions.changeFavourites(favourites?.data));
    }
  };
};
