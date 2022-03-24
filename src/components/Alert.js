import React from "react";

function Alert(props) {
  return (
    //giving height to avoid layout shifting
    <div style={{ height: "40px" }}>
      {
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
      }
    </div>
  );
}

export default Alert;
