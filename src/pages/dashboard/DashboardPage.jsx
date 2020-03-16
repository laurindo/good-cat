import React from "react";
import "../../resources/styles/components/header/header.scss";
import "../../resources/styles/pages/dashboard/dashboardPage.scss";
import ProgressBar from "../../components/progressBar/ProgressBar";
import P1 from "../../components/typography/P1";
import H3 from "../../components/typography/H3";
import H1 from "../../components/typography/H1";
import PieChart from "../../components/chart/PieChart";
import SimpleCard from "../../components/card/SimpleCard";

class DashboardPage extends React.Component {
  render() {
    const {state} = this.props.location;
    const cat = state.cat;
    return (
      <div className="content">
        <SimpleCard image={cat.url}/>
        <div className="dashboard">
          <H1>{cat.name}</H1>
          <H3>About</H3>
          <div className="about">
            <P1><span className="bold">Age: </span>{cat.birthday.age} {cat.birthday.duration}</P1>
            <P1><span className="bold">Favorite Activity</span> {cat.favoriteActivity}</P1>
            <P1><span className="bold">Pet peave</span> {cat.petPeave}</P1>
          </div>
          <div className="detail">
            <div className="location">
              <P1><span className="bold">SPCA Orange County</span></P1>
              <P1>21632 Newland St, Huntigton Beach, CA 92646</P1>
            </div>
            <div className="bio">
              <P1><span className="bold">Bio:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P1>
            </div>
          </div>
          <div className="analytics">
            <div className="progress">
              {cat.analytics.personalities.map((personality, index) => <ProgressBar key={index} name={personality.name} width={personality.value}/>)}
            </div>
            <div>
              <PieChart data={cat.analytics.activities}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;