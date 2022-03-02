import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesActions } from "../../store/Categories";
const MusicRadio = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.Categories);
  const [checked, setChecked] = React.useState(
    filter.mainstream === 0 ? "mainstream" : "alternative"
  );
  useEffect(() => {
    let Filter = { ...filter };
    Filter.mainstream = checked === "mainstream" ? 1 : 0;
    dispatch(CategoriesActions.onChangeFilter(Filter));
  }, [checked]);

  return (
    <>
      <div
        className={`text-center font-noto h5 p-1 m-0 px-2
        ${checked === "alternative" ? "bg-normal text-light" : ""}`}
        onClick={() => {
          setChecked("alternative");
        }}
      >
        Alternative
      </div>
      <div
        className={`text-center font-noto h5 p-1 m-0
        ${checked === "mainstream" ? "bg-normal text-light" : ""}`}
        onClick={() => {
          setChecked("mainstream");
        }}
      >
        Mainstream
      </div>
    </>
  );
};

export default MusicRadio;
