import React from 'react';
import { 
    Button, 
    Card, 
    Col, 
    Form, 
    FormGroup, 
    Label,
    Row,
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
  Paper,
  InputAdornment,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import VpnKey from '@material-ui/icons/VpnKey';

import CloseIcon from '@material-ui/icons/Close';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import logo200Image from 'assets/img/logo/Maytem-Global.png';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { verificationUser, reset_signup_status, signupError } from '../actions/userActions';

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

    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },

  }));

// const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
// });

class SignupPage extends React.Component {

  constructor(props) {
    super(props);

    this.props.reset_signup_status();

    this.state = {
      showPassword: false,
      showPasswordConfirm: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  }

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  handleSubmit = event => {
    event.preventDefault();

    var resultValidation = this.signupValidate();
    if(resultValidation !== ""){
      this.props.signupError(resultValidation);
      return;
    }

    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    }

    this.props.verificationUser(userData);
  };

  signupValidate = () => {
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var email = this.state.email;
    var password = this.state.password;
    var passwordConfirm = this.state.passwordConfirm;

    if(firstName === "" ) {
      return "First Name field is required";
    }

    if(lastName === "" ) {
      return "Last Name field is required";
    }
    
    if(email === "")
      return "Email is required";
    if(password === "")
      return "Password is required";
    if( password !== passwordConfirm)
      return "Password doesn't match."
    return "";
  }

  handleChange = () => event => {
    return this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleClickShowPassword = () => {
    return this.setState({
        showPassword: !this.state.showPassword,
    })
  };

  handleClickShowPasswordConfirm = () => {
    return this.setState({
      showPasswordConfirm: !this.state.showPasswordConfirm,
    })
  }

  render() {

    const { signupStatus } = this.props;
  
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

                <h3 style={{textAlign: 'center' }}>Sign Up</h3>

                {
                  signupStatus !== "" ?
                    <Alert severity="error" style={{marginTop: 30}}
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            this.props.reset_signup_status();
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      {signupStatus}
                    </Alert>
                    :
                    <>
                    </>
                }

                <Grid container spacing={3} style={{marginTop: 30}}>
                  <Grid item xs={6}>
                    {/* <Paper> */}
                        <Input
                            fullWidth
                            id="firstName"
                            name="firstName"
                            onChange={this.handleChange()}
                            placeholder="First Name"
                            style={{fontSize: 15}}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            }
                        />
                    {/* </Paper> */}
                  </Grid>
                  <Grid item xs={6}>
                    {/* <Paper> */}
                        <Input
                            fullWidth
                            id="lastName"
                            name="lastName"
                            onChange={this.handleChange()}
                            placeholder="Last Name"
                            style={{fontSize: 15}}
                        />
                    {/* </Paper> */}
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Paper> */}
                        <Input
                            fullWidth
                            id="email"
                            name="email"
                            onChange={this.handleChange()}
                            placeholder="E-mail"
                            style={{fontSize: 15}}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MailIcon />
                                </InputAdornment>
                            }
                        />
                    {/* </Paper> */}
                  </Grid>
                  <Grid item xs={6}>
                        <Input
                            // fullWidth
                            id="password"
                            name="password"
                            onChange={this.handleChange()}
                            type={this.state.showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            style={{fontSize: 15}}
                            startAdornment={
                                <InputAdornment position="start">
                                    <VpnKey />
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
                  </Grid>
                  <Grid item xs={6}>
                        <Input
                            // fullWidth
                            id="passwordConfirm"
                            name="passwordConfirm"
                            onChange={this.handleChange()}
                            type={this.state.showPasswordConfirm ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            style={{fontSize: 15}}
                            endAdornment={

                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPasswordConfirm}
                                        >
                                        { this.state.showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />                    
                  </Grid>
                </Grid>

                {/* {this.isSignup && (
                <FormGroup>
                    <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
                    <Input {...confirmPasswordInputProps} />
                </FormGroup>
                )} */}
                {/* <FormGroup check>
                  <Label check>
                      <Input type="checkbox" />{' '}
                      {'Agree the terms and policy'}
                  </Label>
                </FormGroup> */}

                <Button
                    size="lg"
                    className="bg-gradient-theme-left border-0"
                    block
                    onClick={this.handleSubmit}
                    style={{marginTop: 60, marginLeft: '10%', width: '80%' }}>
    
                    Sign Up
                </Button>

                <hr />

                <div className="text-center pt-1">
                <h6>
                    Already have an account?&nbsp;&nbsp;
                    <a href="/">
                        Login
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

const mapStateToProps = state => ({
  signupStatus: state.user.signupStatus
})

export default connect(
  mapStateToProps, {
    verificationUser,
    reset_signup_status,
    signupError
  }
)(SignupPage);
