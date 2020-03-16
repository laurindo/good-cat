import React, {Fragment} from "react";
import "../../resources/styles/components/list/list.scss";

class CatList extends React.PureComponent {
  render() {
    return (
      <div className="simpleList">
        <table>
          {this.props.items.map(item => (
            <tr key={item.id}>
              <td><img src={item.url}/></td>
              <td>{item.id}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default CatList;