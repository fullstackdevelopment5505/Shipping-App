import Page from 'components/Page';
import React from 'react';
import userImage from 'assets/img/users/100_15.jpg';
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

class CalculatorPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        firstName: 'Jane', 
        lastName: 'Garza', 
        email: 'jane@gmail.com', 
        company: 'Healthcare Support Co Ltd.', 
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
        <Page title="Profile" >
        
            <Row style={{paddingTop: 30}}>
              <Col xl={6} lg={12} md={12}>
                <Card>
                    <CardBody>
                    {/* <Form> */}
                        <FormGroup row>
                            <Col xl={5} md={4} sm={4} xs={1}>
                            </Col>          
                            <Col xl={2} md={3} sm={3} xs={10}>
                                <CardImg top src={userImage} />
                            </Col>          
                        </FormGroup>   
    
                        <>
                            <Label sm={4} style={{fontSize:13}}>
                                First Name
                            </Label>
                            <Label sm={8}>
                                Jane
                            </Label>
                        </>
    
                        <>
                            <Label sm={4} style={{fontSize:13}}>
                                Last Name
                            </Label>
                            <Label sm={8}>
                                Garza
                            </Label>
                        </>
    
                        <>
                            <Label sm={4} style={{fontSize:13}}>
                                Email
                            </Label>
                            <Label sm={8}>
                                jane@gmail.com
                            </Label>
                        </>
    
                        <>
                            <Label sm={4} style={{fontSize:13}}>
                                Company
                            </Label>
                            <Label sm={8}>
                                Healthcare Support Co Ltd.
                            </Label>
                        </>
    
                        <>
                            <Label sm={4} style={{fontSize:13}}>
                                Shipping Address
                            </Label>
                            <Label sm={8}>
                                El-Kawther Bldg. El-Zohour District
                            </Label>
                        </>
    
                    {/* </Form> */}
                    </CardBody>
                </Card>
              </Col>
    
              <Col xl={6} lg={12} md={12}>
                <Card>
                    <CardHeader><h4>Update Profile</h4></CardHeader>
                    <CardBody>
                    {/* <Form> */}
    
                        <FormGroup row>
                            <Label sm={4}>
                                First Name
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange = {this.handleChange}
                                    placeholder="Input your new first name."
                                />
                            </Col>
                        </FormGroup>
    
                        <FormGroup row>
                            <Label sm={4}>
                                Last Name
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange = {this.handleChange}
                                    placeholder="Input your new last name."
                                />
                            </Col>
                        </FormGroup>
    
                        <FormGroup row>
                            <Label sm={4}>
                                Email
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange = {this.handleChange}
                                    placeholder="Input your new email."
                                />
                            </Col>
                        </FormGroup>
    
                        <FormGroup row>
                            <Label sm={4}>
                                Company
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="company"
                                    value={this.state.company}
                                    onChange = {this.handleChange}
                                    placeholder="Input your new company name."
                                />
                            </Col>
                        </FormGroup>
    
                        <FormGroup row>
                            <Label sm={4}>
                                Shipping Address
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="shippingAddress"
                                    value={this.state.shippingAddress}
                                    onChange = {this.handleChange}
                                    placeholder="Input your new shipping address."
                                />
                            </Col>
                        </FormGroup>
    
                        <FormGroup row>
                            <Label sm={4}>
                                Current Password
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="password"
                                    name="name"
                                />
                            </Col>
                        </FormGroup>
    
                        <FormGroup row>
                            <Label sm={4}>
                                New Password
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="password"
                                    name="name"
                                />
                            </Col>
                        </FormGroup>
    
                        <FormGroup row>
                            <Label sm={4}>
                                Password Confirm
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="password"
                                    name="name"
                                />
                            </Col>
                        </FormGroup>                    
    
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button color="success">Update Profile</Button>
                            </Col>
                        </FormGroup>
    
                    {/* </Form> */}
                    </CardBody>
                </Card>
              </Col>
            </Row>
    
          
        </Page>
      );
    
  }
};

export default CalculatorPage;
