import React from "react";
import "../../resources/styles/components/typography/typography.scss";

class H3 extends React.Component {
  render() {
    return (
      <h3 {...this.props}>{this.props.children}</h3>
    );
  }
}

export default H3;