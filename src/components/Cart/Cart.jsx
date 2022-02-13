import React, { useState } from "react";
import EventDetailsModal from "./EventDetailsModal";
import ServicesModal from "./ServicesModal";
import ContactModal from "./ContactModal";
const Cart = () => {
  const [Modal, setModal] = useState(0);
  const onHandleChange = (e, num) => {
    e.preventDefault();
    setModal(num);
  };

  return (
    <div
      id="cart-modal"
      role="dialog"
      aria-labelledby="cart-modal"
      aria-describedby="cart-modal"
      className="modal fade"
      aria-hidden="true"
      aria-modal="true"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <span tabIndex="0"></span>
        <div
          role="document"
          id="cart-modal"
          tabIndex="-1"
          className="modal-content bg-transparent border-0"
        >
          <div
            id="cart-modal"
            className="modal-body book-modal-body border-normal"
          >
            <div id="booking-form-popup">
              {Modal === 0 && <ServicesModal setModal={onHandleChange} />}
              {Modal === 1 && <EventDetailsModal setModal={onHandleChange} />}
              {Modal === 2 && <ContactModal setModal={onHandleChange} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
