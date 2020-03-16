import React from "react";
import "../../resources/styles/components/sidebar/sidebar.scss";
import {Link} from "react-router-dom";
import H2 from "../typography/H2";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <H2 className="title">{this.props.title}</H2>
        <hr/>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}><Link to={item.path}>{item.label}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;