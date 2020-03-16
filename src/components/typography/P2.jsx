import React from "react";
import "../../resources/styles/components/typography/typography.scss";

class P2 extends React.Component {
  render() {
    return (
      <p className="body2">{this.props.children}</p>
    );
  }
}

export default P2;