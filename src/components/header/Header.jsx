import React from "react";
import "../../resources/styles/components/header/header.scss";
import {Route, Switch} from "react-router-dom";
import Logo from "../logo/Logo";
import LogoIcon from "../icons/LogoIcon";
import HomeNav from "../nav/HomeNav";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo>
          <LogoIcon/>
          <h1>Purrrfect Match</h1>
        </Logo>
        <Switch>
          <Route exact path="/" component={HomeNav}/>
        </Switch>
      </header>
    );
  }
}

export default Header;