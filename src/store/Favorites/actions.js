import { FavoritesActions } from ".";
import { removeFavourite, setFavourite } from "../../httpService/favourites";
import { UiActions } from "../Ui";

export const onSetLiked = (id, logged) => {
  return async (dispatch) => {
    if (logged) {
      let result = await setFavourite(id);
      dispatch(
        FavoritesActions.setFavorite({
          artist_id: parseInt(result.data.item.artist_id),
          created_at: result.data.item.created_at,
          id: parseInt(result.data.item.id),
          updated_at: result.data.item.updated_at,
          user_id: result.data.item.user_id,
        })
      );
    } else {
      dispatch(
        UiActions.onHandleUiChange([{ element: "authModal", value: true }])
      );
    }
  };
};
export const onSetDisLiked = (id, logged) => {
  return async (dispatch) => {
    if (logged) {
      await removeFavourite(id);
      dispatch(FavoritesActions.removeFavourite(id));
    } else {
      dispatch(
        UiActions.onHandleUiChange([{ element: "authModal", value: true }])
      );
    }
  };
};
