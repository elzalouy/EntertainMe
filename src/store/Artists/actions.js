import { ArtistsActions } from ".";
import { getFeaturedArtists, getArtist } from "../../httpService/artists";

export const onGetArtists = () => {
  return async (dispatch) => {
    let Artistsresult = await getFeaturedArtists();
    dispatch(ArtistsActions.onChangeFeaturedArtists({ data: Artistsresult }));
  };
};
export const onGetArtist = (id) => {
  return async (dispatch) => {
    const result = await getArtist(id);
    if (result) {
      dispatch(ArtistsActions.onChangeArtist({ data: result }));
    }
  };
};
