import React from "react";
import "../../resources/styles/pages/cat/catPage.scss";
import SimpleCard from "../../components/card/SimpleCard";
import Button from "../../components/button/Button";
import NextIcon from "../../components/icons/NextIcon";
import P1 from "../../components/typography/P1";
import H1 from "../../components/typography/H1";
import H3 from "../../components/typography/H3";
import P2 from "../../components/typography/P2";

class CatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      favoriteActivity: "",
      petPeave: "",
      ownership: {
        location: "",
        organization: "",
        medicalRecord: []
      }
    };
  }

  render() {
    const {name, age, favoriteActivity, petPeave, ownership} = this.state;
    return (
      <div className="content">
        <SimpleCard title="Help make a Purrfect Match"></SimpleCard>
        <div className="form">
          <form name="cat">
            <div>
              <H1>ADD NEW CAT</H1>
            </div>

            <H3>Cat</H3>
            <div>
              <label htmlFor="name"><P2>Name</P2></label>
              <input id="name" type="text" value={name} onChange={e => this.setState({name: e.target.value})}/>
            </div>

            <div>
              <label htmlFor="age"><P2>Age</P2></label>
              <input id="age" type="text" value={age} onChange={e => this.setState({age: e.target.value})}/>
            </div>

            <div>
              <label htmlFor="favoriteActivity"><P2>Favorite Activity</P2></label>
              <input id="favoriteActivity" type="text" value={favoriteActivity} onChange={e => this.setState({favoriteActivity: e.target.value})}/>
            </div>

            <div>
              <label htmlFor="petPeave"><P2>Pet Peave</P2></label>
              <input id="petPeave" type="text" value={petPeave} onChange={e => this.setState({petPeave: e.target.value})}/>
            </div>


            <H3>Ownership</H3>
            <div>
              <label htmlFor="location"><P2>Location</P2></label>
              <input
                id="location"
                type="text"
                value={ownership.location}
                onChange={e => this.setState({ownership: {...ownership, location: e.target.value}})}
              />
            </div>

            <div>
              <label htmlFor="organization"><P2>Organization</P2></label>
              <input
                id="organization"
                type="text"
                value={ownership.organization}
                onChange={e => this.setState({ownership: {...ownership, organization: e.target.value}})}
              />
            </div>

            <div>
              <label htmlFor="medicalRecord"><P2>Medical Record</P2></label>
              <input
                id="medicalRecord"
                type="text"
                value={ownership.medicalRecord}
                onChange={e => this.setState({ownership: {...ownership, medicalRecord: e.target.value}})}
              />
            </div>

            <Button linear iconRight={NextIcon}><P1 color="white">NEXT</P1></Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CatPage;