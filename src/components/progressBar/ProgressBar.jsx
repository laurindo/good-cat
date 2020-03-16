import React from "react";
import "../../resources/styles/components/progressBar/progressBar.scss";

class ProgressBar extends React.PureComponent {
  render() {
    return (
      <div className="wrapperProgressBar">
        <p>{this.props.name}</p>
        <div className="progressBar">
          <span className="progressBarFill" style={{width: `${this.props.width}%`}}/>
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  width: 0
};

export default ProgressBar;