import { ArtistsActions } from "../Artists";
import { EventsActions } from ".";
export const addArtistToCart = (FilterSelectedArtists, item) => {
  return (dispatch) => {
    let artists = [...FilterSelectedArtists];
    let index = artists.findIndex((i) => i.id === item.id);
    if (index < 0) {
      artists.push(item);
      dispatch(
        ArtistsActions.onHandleChangeItems({
          element: "FilterSelectedArtists",
          value: artists,
        })
      );
      dispatch(
        EventsActions.onHandleCartArray({ element: "artists", value: item?.id })
      );
    }
  };
};

export const onRemoveArtistFromCart = (FilterSelectedArtists, item) => {
  return (dispatch) => {
    let artists = [...FilterSelectedArtists];
    let index = artists.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      artists = artists.filter((i) => i !== item);
      dispatch(
        ArtistsActions.onHandleChangeItems({
          element: "FilterSelectedArtists",
          value: artists,
        })
      );
      dispatch(
        EventsActions.onHandleCartArray({ element: "artists", value: item?.id })
      );
    }
  };
};
