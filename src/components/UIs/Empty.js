import React from "react";

const Empty = () => {
  return (
    <div className="row w-100 h-100 justify-content-center align-items-center text-center">
      <div className="col-12 m-0 p-0">
        <i
          class="bi bi-arrow-clockwise p-5 m-5"
          onClick={() => window.location.reload()}
          style={{ fontSize: "64px", cursor: "pointer" }}
        ></i>
      </div>
      <div className="col-12 m-0 p-0">
        <h1>No Data right now</h1>
      </div>
    </div>
  );
};

export default Empty;
