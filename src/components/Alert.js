import React from "react";

function Alert(props) {
  return (
    // not recommended to use but famous among community
    // this allows other parts to execute only if 1st is right
    // this is bcz jsx is converted to callbacks
    props.alert && (
      <div
        className={`alert alert-${props.alert.status} alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
