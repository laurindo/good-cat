import React from "react";
import "../../resources/styles/components/typography/typography.scss";

class P1 extends React.Component {
  render() {
    const {noItalic} = this.props;
    return (
      <p className={`body1 ${noItalic ? "noItalic" : ""}`}>{this.props.children}</p>
    );
  }
}

export default P1;