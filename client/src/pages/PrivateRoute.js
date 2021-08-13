import React from 'react';
import {Redirect, Route} from "react-router-dom"
import { connect } from "react-redux";

class PrivateRoute extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    }  
  }

  render() {
    return (
      <Route
        render={({ location }) =>
          this.props.isAuthenticated ? (
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
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(
    mapStateToProps
)(PrivateRoute);