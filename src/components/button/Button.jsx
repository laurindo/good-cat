import React from "react";
import "../../resources/styles/components/button/button.scss";

class Button extends React.Component {
  render() {
    const {iconLeft, iconRight, linear, children, ...props} = this.props;
    return (
      <button className={linear ? "linear" : ""} {...props}>
        {iconLeft && <this.props.iconLeft className="left"/>}
        {children}
        {iconRight && <this.props.iconRight className="right"/>}
      </button>
    );
  }
}

export default Button;