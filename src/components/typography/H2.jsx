import React from "react";
import "../../resources/styles/components/typography/typography.scss";

class H2 extends React.Component {
  render() {
    return (
      <h2 {...this.props}>{this.props.children}</h2>
    );
  }
}

export default H2;