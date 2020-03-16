import React from "react";
import "../../resources/styles/components/card/simpleCard.scss";

class SimpleCard extends React.Component {
  render() {
    const {title, image} = this.props;
    return (
      <div className="simpleCard imageWrapper">
        <div className="imageContainer">
          {title && <h1 className="text">{title}</h1>}
          <img src={image} alt="card" className="image" />
        </div>
      </div>
    );
  }
}

export default SimpleCard;