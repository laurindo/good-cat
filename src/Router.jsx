import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import {AnimalConsumer} from "./contexts/AnimalContext";
import {SystemProvider} from "./contexts/SystemContext";
import CatPage from "./pages/cat/CatPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import HomePage from "./pages/home/HomePage";
import {route} from "./route";

class BrowserRouter extends React.Component {
  render() {
    return (
      <SystemProvider value={{history: this.props.history}}>
        <AnimalConsumer>
          {props => (
            <Container>
              <Router history={this.props.history}>
                <Switch>
                  <Route component={Header}/>
                </Switch>
                <Switch>
                  <Route exact path={route.dashboard} component={DashboardPage}/>
                  <Route exact path={route.root} component={() => <HomePage {...props} />}/>
                  <Route exact path={route.cat} component={CatPage}/>
                </Switch>
              </Router>
            </Container>
          )}
        </AnimalConsumer>
      </SystemProvider>
    );
  }
}

export default BrowserRouter;