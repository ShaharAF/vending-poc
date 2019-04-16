import React from "react";

const FormField = props => {
  return (
    <div className="field error">
      <div className="ui left icon input">
        <i className={`${props.iconName} icon`} />
        <input
          type="text"
          name={props.inputName}
          placeholder={props.placeholder}
          onChange={props.onInputChange}
          error="props.error"
        />
      </div>
    </div>
  );
};

export default FormField;
