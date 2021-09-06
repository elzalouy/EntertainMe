import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EventDetailsModal from "./EventDetailsModal";
import ServicesModal from "./ServicesModal";
import {UiActions} from '../../store/Ui';

const BookEvent = () => {
  const dispatch = useDispatch();
  const modal=useSelector(state=>state.UI.modal);
  const onHandleChange=(num)=>{
    dispatch(UiActions.onChangeModel([{element:'modal',value:num}]));
  }
  return (
    <React.Fragment>
      {modal===0?<ServicesModal onHandleChange={onHandleChange}/>:<EventDetailsModal onHandleChange={onHandleChange}/>}
    </React.Fragment>
  );
};

export default BookEvent;
