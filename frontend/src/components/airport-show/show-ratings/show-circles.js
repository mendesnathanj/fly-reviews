import React from "react";
import "../../review_form/rating_slider/Circle.scss";

class ShowCircle extends React.Component {
  render() {
    let fullCircleClasses = "circle";
    return (
      <div className="circle-container">
        <div
          className={fullCircleClasses}
        ></div>
      </div>
    );
  }
}

export default ShowCircle;
