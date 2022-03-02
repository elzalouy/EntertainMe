import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesActions } from "../../store/Categories";

const PresnseRadioButtons = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.Categories);
  const [checked, setChecked] = React.useState(
    filter.international === 0 ? "local" : "international"
  );
  useEffect(() => {
    let Filter = { ...filter };
    Filter.international = checked === "local" ? 0 : 1;
    dispatch(CategoriesActions.onChangeFilter(Filter));
  }, [checked]);
  return (
    <>
      <div
        className={`text-center font-noto h5 p-1 px-3 m-0 
        ${checked === "local" ? "bg-normal text-light" : ""}`}
        onClick={() => {
          setChecked("local");
        }}
      >
        Local
      </div>
      <div
        className={`text-center font-noto h5 p-1 m-0 
        ${checked === "international" ? "bg-normal text-light" : ""}`}
        onClick={() => {
          setChecked("international");
        }}
      >
        International
      </div>
    </>
  );
};

export default PresnseRadioButtons;
