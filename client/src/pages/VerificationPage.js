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
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import VpnKey from '@material-ui/icons/VpnKey';

import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import logo200Image from 'assets/img/logo/Maytem-Global.png';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser, reset_signup_status, signupError } from '../actions/userActions';

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

class VerificationPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      veri_Code: "",
      verificationStatus: "",
    }
  }

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  handleSubmit = event => {
    event.preventDefault();

    if(this.props.verificationCode !== this.state.veri_Code) {
        this.setState({
            verificationStatus: "Wrong Code"
        })
        return;
    }

    const userData = {
      firstName: this.props.unverifiedUser.firstName,
      lastName: this.props.unverifiedUser.lastName,
      email: this.props.unverifiedUser.email,
      password: this.props.unverifiedUser.password,
    }

    this.props.signupUser(userData);
  };

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

    const { verificationStatus } = this.state;
  
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center'
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

                <h4 style={{textAlign: 'center', marginTop: 20, fontFamily: "Arial, sans-serif"  }}>Enter Your Verification Code.</h4>

                {
                  verificationStatus !== "" ?
                    <Alert severity="error" style={{marginTop: 30}}>
                      {verificationStatus}
                    </Alert>
                    :
                    <>
                    </>
                }

                <Grid container spacing={15} style={{marginTop: 50, textAlign: 'center'}}>
                  <Grid item xs={12}>
                    {/* <Paper> */}
                        <Input
                            id="veri_Code"
                            name="veri_Code"
                            size="lg"
                            onChange={this.handleChange()}
                            placeholder="4-digit Code"
                            style={{fontSize: 20}}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                        />
                    {/* </Paper> */}
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
                    className="border-1"
                    color="info"
                    block
                    onClick={this.handleSubmit}
                    style={{marginTop: 40, marginLeft: '10%', width: '80%' }}>
    
                    Verify
                </Button>

                {/* <hr />

                <div className="text-center pt-1">
                <h6>
                    Already have an account?&nbsp;&nbsp;
                    <a href="/">
                        Login
                    </a>
                </h6>
                </div> */}

            </Form>


          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
    verificationCode: state.user.verificationCode,
    unverifiedUser: state.user.unverifiedUser,
})

export default connect(
  mapStateToProps, {
    signupUser,
    reset_signup_status,
    signupError
  }
)(VerificationPage);
