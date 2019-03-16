import React, { Fragment } from "react";
import "./style.css";

function Title(props) {
  return (
    <Fragment>
      <div className="upTop">
        <div className="title">{props.children}</div>
        <div className="subText">
          Welcome to the most <strong>radical</strong> memory game ever! If you
          can manage to only click each character once, then you win.
        </div>
      </div>
    </Fragment>
  );
}

export default Title;
