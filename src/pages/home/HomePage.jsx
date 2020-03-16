import React from "react";
import CatService from "../../services/CatService";
import SimpleList from "../../components/list/SimpleList";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../resources/styles/components/header/header.scss";
import "../../resources/styles/pages/home/homePage.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.catService = new CatService();
    this.items = [{
      label: "How to find the purrrfect cat",
      path: "/cats/01"
    }, {
      label: "Whtad",
      path: "/cats/02"
    }, {
      label: "How to",
      path: "/cats/03"
    }];
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    this.catService.images().then((cats, error) => {
      const allCats = this.props.animals.filter((cat, index) => {
        cat.id = cats[index].id;
        cat.url = cats[index].url;
        return cat;
      });
      return this.setState({cats: allCats});
    });
  }

  render() {
    return (
      <div className="content">
        <Sidebar title="CAT FEED" items={this.items}/>
        <SimpleList title="CAT LIST" items={this.state.cats}/>
      </div>
    );
  }
}

export default HomePage;