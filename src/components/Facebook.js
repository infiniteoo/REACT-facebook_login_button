import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };
  render() {
    console.log(process.env.REACT_APP_FACEBOOK_APP_ID);
    let fbContent;
    if (this.state.isLoggedIn) {
    } else {
      fbContent = (
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div></div>;
  }
}
