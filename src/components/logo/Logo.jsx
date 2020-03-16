import React from "react";
import {SystemConsumer} from "../../contexts/SystemContext";
import "../../resources/styles/components/logo/logo.scss";

class Logo extends React.Component {
  render() {
    return (
      <SystemConsumer>
        {props => (
          <div className="logo" onClick={() => props.history.push("/")}>
            {this.props.children}
          </div>
        )}
      </SystemConsumer>
    );
  }
}

export default Logo;