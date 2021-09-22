import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EventDetailsModal from "./EventDetailsModal";
import ServicesModal from "./ServicesModal";
import {UiActions} from '../../store/Ui';
import ContactModal from "./ContactModal";

const BookEvent = () => {
  const dispatch = useDispatch();
  const modal=useSelector(state=>state.UI.modal);
  const onHandleChange=(num)=>{
    dispatch(UiActions.onChangeModel([{element:'modal',value:num}]));
    console.log(num);
  }
  return (
    <div id="booking-modal" role="dialog" aria-labelledby="booking-modal" aria-describedby="booking-modal"
      className="modal fade" aria-hidden="true" aria-modal="true"
      tabIndex="-1"
      // style={{display: "block", paddingLeft:  "5px"}}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <span tabIndex="0"></span>
        <div
          role="document"
          id="booking-modal"
          tabIndex="-1"
          className="modal-content bg-transparent border-0">
          <div
            id="booking-modal"
            className="modal-body book-modal-body border-normal" >
              <div id="booking-form-popup">
                <React.Fragment>
                  {/* {modal===0?<ServicesModal onHandleChange={onHandleChange}/>:<EventDetailsModal onHandleChange={onHandleChange}/>} */}
                  {modal===0?<EventDetailsModal onHandleChange={onHandleChange}/>:<EventDetailsModal onHandleChange={onHandleChange}/>}
                  {/* {modal===0?<ContactModal onHandleChange={onHandleChange}/>:<ContactModal onHandleChange={onHandleChange}/>} */}
                </React.Fragment>
              </div>
                <div className="steps-buttons">
                <div className="step-button bg-normal"></div>
                <div className="step-button"></div>
                <div className="step-button"></div>
              </div>
            </div>
          </div>
        </div>
        <span tabIndex="0"></span>
      </div>
    // </div>
  );
};

export default BookEvent;
