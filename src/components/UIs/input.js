import React from "react";

const Input = (type, autoComplete, value, onChange) => {
  return (
    <React.Fragment>
      <div className="col-md-3 col-6">
        <div className="text-light font-noto-m custom-control custom-checkbox b-custom-control-sm">
          <input
            type={type}
            autoComplete={autoComplete}
            value={value}
            onChange={(e) => onChange(e)}
            className="custom-control-input"
          />
          <label className="custom-control-label">{label}</label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Input;
