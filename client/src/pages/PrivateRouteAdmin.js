import React from 'react';
import {Redirect, Route} from "react-router-dom"
import { connect } from "react-redux";

class PrivateRouteAdmin extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    }  
  }

  render() {
  return (
    <Route
      render={({ location }) =>
        this.props.currentUser.authority === 0 ? (
          null
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(
    mapStateToProps
)(PrivateRouteAdmin);