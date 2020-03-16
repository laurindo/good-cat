import React from "react";
import PlusIcon from "../icons/PlusIcon";
import Button from "../button/Button";
import SearchInput from "../input/SearchInput";
import P1 from "../typography/P1";

class HomeNav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <SearchInput/>
          </li>
          <li>
            <Button iconLeft={PlusIcon} onClick={() => this.props.history.push("/cat")}>
              <P1 noItalic>ADD NEW CAT</P1>
            </Button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomeNav;