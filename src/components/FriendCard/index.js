import React from "react";
import "./style.css";
import { Animated } from "react-animated-css";

function FriendCard(props) {
  return (
    <Animated animationIn="headShake" isVisible={true}>
      <div onClick={() => props.guess(props.id)} className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </Animated>
  );
}

export default FriendCard;
