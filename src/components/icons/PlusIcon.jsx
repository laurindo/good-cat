import React from "react";

class PlusIcon extends React.Component {
  render() {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="11" y1="5" x2="11" y2="17" stroke="#5452F6" stroke-width="2"/>
        <line x1="5" y1="11" x2="17" y2="11" stroke="#5452F6" stroke-width="2"/>
        <circle cx="11" cy="11" r="10" stroke="#5452F6" stroke-width="2"/>
      </svg>
    );
  }
}

PlusIcon.propTypes = {}

export default PlusIcon;