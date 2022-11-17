import React, { Component } from "react";
import HomePageProductView from "./HomePageProductView";

class HomePageProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <HomePageProductView />
      </React.Fragment>
    );
  }
}

export default HomePageProductContainer;
