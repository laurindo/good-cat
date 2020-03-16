import React from "react";
import H1 from "../../components/typography/H1";
import H3 from "../../components/typography/H3";
import {SystemConsumer} from "../../contexts/SystemContext";
import "../../resources/styles/components/list/list.scss";

class SimpleList extends React.PureComponent {
  render() {
    const {title, items} = this.props;
    return (
      <SystemConsumer>
        {props => (
          <div className="simpleList">
            <div className="header">
              <H1>{title}</H1>
            </div>
            <div className="body">
              <table>
                {items.map((value, index) => (
                  <tr key={value.id || index} onClick={() => props.history.push(`/dashboard/${value.id}`, {cat: value})}>
                    <td className="image"><img src={value.url} alt={value.title}/></td>
                    <td><H3>{value.name}</H3></td>
                    <td><span className="bold">{value.birthday.age}</span> {value.birthday.duration}</td>
                    <td><span className="bold">Favorite Activity:</span> {value.favoriteActivity}</td>
                    <td><span className="bold">Pet Peave:</span> {value.petPeave}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        )}
      </SystemConsumer>
    );
  }
}

SimpleList.defaultProps = {
  items: []
};

export default SimpleList;