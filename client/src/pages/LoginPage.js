import React from 'react';
import { 
    Button, 
    Card, 
    Col, 
    Form, 
    FormGroup, 
    Label,
    Row,
    UncontrolledAlert,
  } from 'reactstrap';

import {
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button as MaterialBtn,
  IconButton,
  TextField,
  FormControl,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import VpnKey from '@material-ui/icons/VpnKey';

import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';

import logo200Image from 'assets/img/logo/Maytem-Global.png';
import Alert from '@material-ui/lab/Alert';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, reset_login_status, loginError, googleLogin, facebookLogin } from '../actions/userActions';
import jwt_decode from 'jwt-decode';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

import './socialButton.css';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: 200,
    },
  }));

// const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
// });

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.props.reset_login_status();

    this.state = {
      
      email: '',
      password: '',
      showPassword: false,
      signupStatus: this.props.signupStatus,
      // errors: {}
    }

    if(localStorage.jwtToken) {
      var sessionValue = jwt_decode(localStorage.getItem("jwtToken"));
      let authority = sessionValue.authority;

      if(authority === 0) {
        window.location = "/homeAdmin";
      } else if(authority === 2) {
        window.location = "/home";
      }
    }    

  }

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  handleSubmit = event => {
    event.preventDefault();

    var resultValidation = this.loginValidate();
    if(resultValidation !== "") {
      this.props.loginError(resultValidation);
      return;
    }

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData);

  };

  loginValidate = () => {
    var email = this.state.email;
    var password = this.state.password;

    if(email === "")
      return "Email field is required";
    if(password === "")
      return "Password field is required";
    return "";
  }

  handleChange = event => {
    return this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleClickShowPassword = () => {
    return this.setState({
        showPassword: !this.state.showPassword,
    })
  };

  responseFacebook = (response) => {
    if(response.status === "unknown") {
      console.log("Facebook login error");
      return;
    }

    //If facebook login is success.
    const userData = {
      id: response.userID,
      firstName: response.name,
      avatar: response.picture.data.url
    }
    console.log(userData);
    this.props.facebookLogin(userData);
  }

  googleLoginSuccess = ( response ) => {

    const gmailData = response.profileObj;
    if(gmailData === null) {
      console.log("Gmail Data error");
      return;
    }
    const userData = {
      id: gmailData.googleId,
      email: gmailData.email,
      firstName: gmailData.givenName,
      lastName: gmailData.familyName,
      avatar: gmailData.imageUrl
    }
    console.log(gmailData);
    this.props.googleLogin(userData);

  }

  googleLoginFailure = ( response ) => {
    // alert(response);
    console.log(response);
  }

  render() {


    const { loginStatus } = this.props;

    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={3}>
          <Card body>

            <Form onSubmit={this.handleSubmit}>
                <div className="text-center pb-4">
                    <img
                        src={logo200Image}
                        className="rounded"
                        style={{ width: 210, height: 60, cursor: 'pointer' }}
                        alt="logo"
                        // onClick={onLogoClick}
                    />
                </div>

                <h4 style={{textAlign: 'center', fontFamily: 'arial',  marginTop: 10 }}>Login with</h4>

                <Row style={{marginTop: 30}}>
                  <Col lg={4} md={4} sm={4} xs={4}>
                  </Col>

                    <FacebookLogin
                      // appId = "211655916649788"    //localhost
                      appId = "509511473091913"
                      autoLoad={false}
                      cssClass="btnFacebook"
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      icon="fa-facebook"
                      textButton = "&nbsp;"
                      >
                    </FacebookLogin>

                    <Col lg={1} md={1} sm={1} xs={1}>
                    </Col>
                    <GoogleLogin                        
                        // clientId="735125747499-l53o4bfvj0a6hnf3372uc17442lp28ho.apps.googleusercontent.com"   //localhost
                        clientId="125086243476-4n5a4o7vppvrpubeiobovlbf7vcqa64f.apps.googleusercontent.com"
                        onSuccess={this.googleLoginSuccess}
                        onFailure={this.googleLoginFailure}
                        // cookiePolicy={'single_host_origin'}
                        // cssClass="btnGoogle"
                        className="btnGoogle"
                        >
                        <i className="fa" /> 
                    </GoogleLogin>

                </Row>

                <hr />

                <Row>
                  <Col lg={5} md={4} sm={4} xs={4}>
                  </Col>                  
                  <span style={{textAlign: 'center', fontFamily: 'arial', color: '#b2bac8'}}>or email with</span>
                </Row>

                {
                  loginStatus !== "" ?
                    <Alert severity="error" style={{marginTop: 30}}
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            this.props.reset_login_status();
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      {loginStatus}
                    </Alert>
                    :
                    <>
                    </>
                }
                
                <FormGroup style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
                    <FormControl fullWidth>
                        <Input
                            // fullWidth
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="E-mail"
                            style={{fontSize: 20}}
                            startAdornment={
                                <InputAdornment position="start" style={{cursor: 'default'}}>
                                    <MailIcon style={{marginRight: 10}}/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </FormGroup>

                <FormGroup style={{marginTop: 40, marginBottom: 50, marginLeft: 20, marginRight: 20}}>
                    <FormControl fullWidth>
                        <Input
                            // fullWidth
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            style={{fontSize: 20}}
                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKey style={{marginRight: 10}}/>
                                </InputAdornment>
                            }
                            endAdornment={

                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        >
                                        { this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </FormGroup>


                {/* {this.isSignup && (
                <FormGroup>
                    <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
                    <Input {...confirmPasswordInputProps} />
                </FormGroup>
                )}
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
                </Label>
                </FormGroup> */}

                <Button
                    size="lg"
                    className="bg-gradient-theme-left border-0"
                    block
                    style={{marginTop: 60, marginLeft: '10%', width: '80%' }}>
                    {/* onClick={this.handleSubmit} */}
    
                    Login
                </Button>

                <hr />

                <div className="text-center pt-1">

                <h6 style={{ fontFamily: 'arial'}}>
                    Don't have an account?&nbsp;&nbsp;
                    <a href="/signup">
                        Signup
                    </a>
                </h6>
                </div>

            </Form>


          </Card>
        </Col>
      </Row>
    );
  }
}

// LoginPage.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   // auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.user.isAuthenticated,
  loginStatus: state.user.loginStatus,
});

export default connect (
  mapStateToProps,
  {
      loginUser,
      reset_login_status,
      loginError,
      googleLogin,
      facebookLogin
  }
)(LoginPage);
