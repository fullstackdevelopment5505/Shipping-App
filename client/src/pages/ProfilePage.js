import Page from 'components/Page';
import React from 'react';
import userImage from 'assets/img/users/100_15.jpg';
import Paper from '@material-ui/core/Paper';

import ProfileTabs from './tabs/ProfileTabs';

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
  } from 'reactstrap';

  
import {
    CardContent,
    CardActions,
    Divider,
    Grid,
    Button as MaterialBtn,
    IconButton,
    TextField,
    Select,
    MenuItem,
    FormControl,
    NativeSelect,
    Avatar,
  } from '@material-ui/core';

class ProfilePage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        firstName: 'Jane', 
        lastName: 'Garza', 
        email: 'jane@gmail.com', 
        phoneNumber: '1103569827', 
        shippingAddress: 'El-Kawther Bldg. El-Zohour District' 
      }
  }

  onChangeFirstName = (e) => {
    this.setState({
        firstName: e.target.value
    });
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render() {
    return (
        <Page title="Profile" style={{fontFamily: "Arial, sans-serif" }} >

            <ProfileTabs index={0}/>

            <Row style={{marginTop: 40}} >
                <Col lg={8}>
                    {/* <h4>Edit Profile</h4> */}
                    <Card>
                        <CardBody>
                            <FormGroup row>
                                <Col xl={6} md={6} sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="First Name"
                                        // variant="outlined"
                                        name="firstName"
                                        onChange={this.handleChange}
                                        value={this.state.firstName}
                                        // required
                                    />
                                </Col>          
                                <Col xl={6} md={6} sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="Last Name"
                                        // variant="outlined"
                                        name="lastName"
                                        onChange={this.handleChange}
                                        value={this.state.lastName}
                                        // required
                                    />
                                </Col>          
                            </FormGroup>   

                            <FormGroup row>
                                <Col xl={6} md={6} sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="Email"
                                        // variant="outlined"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        // required
                                    />
                                </Col>          
                                <Col xl={6} md={6} sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="Phone Number"
                                        // variant="outlined"
                                        name="phoneNumber"
                                        onChange={this.handleChange}
                                        value={this.state.phoneNumber}
                                        // required
                                    />
                                </Col>          
                            </FormGroup>   

                            <FormGroup row>
                                <Col xl={12} md={12} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="Shipping Address"
                                        // variant="outlined"
                                        name="shippingAddress"
                                        onChange={this.handleChange}
                                        value={this.state.shippingAddress}
                                        // required
                                    />
                                </Col>          
                            </FormGroup>   
        
                            <FormGroup row>
                                <Col xl={4} md={4} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="City"
                                        // variant="outlined"
                                        name="city"
                                        onChange={this.handleChange}
                                        value={this.state.city}
                                        // required
                                    />
                                </Col>          
                                <Col xl={4} md={4} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="Country"
                                        // variant="outlined"
                                        name="country"
                                        onChange={this.handleChange}
                                        value={this.state.country}
                                        // required
                                    />
                                </Col>  
                                <Col xl={4} md={4} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="Zip Code"
                                        // variant="outlined"
                                        name="zipCode"
                                        onChange={this.handleChange}
                                        value={this.state.zipCode}
                                        // required
                                    />
                                </Col>                                  
                            </FormGroup>   

                            <FormGroup>
                                <MaterialBtn 
                                    color="primary"
                                    variant="contained"
                                    className="float-right"
                                    // onClick={this.submitNewOrder()}
                                    style={{marginRight:10}}
                                    >
                                    Update Profile
                                </MaterialBtn>
                            </FormGroup>
        
                        </CardBody>
                    </Card>

                </Col>

                {/* <Col lg={4}>
                    <Card>
                        <CardBody>
                            <FormGroup row>
                                <Col lg={5} md={5} sm={4} xs={5}>
                                </Col>
                                <Avatar style={{width: 90, height: 90}}/>
                            </FormGroup>

                            <Grid container spacing={2} style={{marginTop: 0}}>
                                <Grid item xs={6} style={{paddingRight: 0}}>
                                    <span className="float-right" style={{fontSize: 16, marginRigt: 0}}>{this.state.firstName}</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <span className="float-left" style={{fontSize: 16, marginLeft: 0}}>{this.state.lastName}</span>
                                </Grid>
                            </Grid>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row> */}
                <Col lg={4}>
                    <Card>
                        <CardBody>
                            <FormGroup row>
                                <h4 style={{marginLeft: 20}}>Security Options</h4>
                            </FormGroup>
                            <FormGroup row style={{marginTop: 40}}>
                                <Col xl={12} md={12} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="Current Password"
                                        // variant="outlined"
                                        name="currentPassword"
                                        onChange={this.handleChange}
                                        value={this.state.currentPassword}
                                        type="password"
                                        // required
                                    />
                                </Col>          

                                <Col xl={12} md={12} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="New Password"
                                        // variant="outlined"
                                        name="newPassword"
                                        onChange={this.handleChange}
                                        value={this.state.newPassword}
                                        type="password"
                                        // required
                                    />
                                </Col>  

                                <Col xl={12} md={12} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        helperText=""
                                        label="New Password Confirm"
                                        // variant="outlined"
                                        name="newPasswordConfirm"
                                        onChange={this.handleChange}
                                        value={this.state.newPasswordConfirm}
                                        type="password"
                                        // required
                                    />
                                </Col>  
                            </FormGroup>  

                            <FormGroup>
                                <MaterialBtn 
                                    color="primary"
                                    variant="contained"
                                    className="float-right"
                                    // onClick={this.submitNewOrder()}
                                    style={{marginRight:10}}
                                    >
                                    Save
                                </MaterialBtn>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </Page>
      );
    
  }
};

export default ProfilePage;
