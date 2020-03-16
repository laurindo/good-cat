import React from "react";
import "../../resources/styles/components/typography/typography.scss";

class H1 extends React.Component {
  render() {
    return (
      <h1 {...this.props}>{this.props.children}</h1>
    );
  }
}

export default H1;