import { CategoriesActions } from ".";
import { getCategories, getCategory } from "../../httpService/categories";
import { UiActions } from "../Ui";
import { onGetArtists } from "../Artists/actions";
export const onGetCategories = () => {
  return async (dispatch) => {
    dispatch(UiActions.onHandleUiChange([{ element: "loading", value: true }]));
    // get categories
    let categoriesResult = await getCategories();
    dispatch(CategoriesActions.onChangeCategories({ data: categoriesResult }));
    //set selected categories for discover screen
    dispatch(onGetArtists());
    dispatch(
      UiActions.onHandleUiChange([{ element: "loading", value: false }])
    );
  };
};

export const onLoadArtists = (id, page) => {
  return async (dispatch) => {
    let cat = await getCategory(id, page);
    if (cat) {
      dispatch(CategoriesActions.onChangeCategory({ data: cat }));
      dispatch(CategoriesActions.onLoadData(cat?.artists.data));
    }
  };
};
export const onLoadCategory = (id) => {
  return async (dispatch) => {
    let result = await getCategory(id);
    if (result) {
      dispatch(
        CategoriesActions.onChangeCategory({
          data: result,
        })
      );
      dispatch(
        CategoriesActions.onChangeItem({
          element: "selectedArtists",
          data: result.artists.data,
        })
      );
    }
  };
};
