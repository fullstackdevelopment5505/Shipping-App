import Page from 'components/Page';
import Carousel from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Row, 
  Table, 
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import {
    Avatar
} from "@material-ui/core";

import {
    MdEdit,
    MdDelete,
} from 'react-icons/md';

import unknownAvartar from '../assets/img/users/unknown.png';
import userAvartar1 from '../assets/img/users/100_1.jpg';
import userAvartar2 from '../assets/img/users/100_2.jpg';
import userAvartar3 from '../assets/img/users/100_3.jpg';
import userAvartar4 from '../assets/img/users/100_4.jpg';
import userAvartar5 from '../assets/img/users/100_5.jpg';
import userAvartar6 from '../assets/img/users/100_6.jpg';
import userAvartar7 from '../assets/img/users/100_10.jpg';

const users = [
    { number: 1, avatar: unknownAvartar, firstName: 'Cao', lastName: 'Yu', email: 'cao.yu@devias.io', company: 'Reading Schmeading', shippingAddress: 'AAAAA, London, England' },
    { number: 2, avatar: userAvartar2, firstName: 'Alexa', lastName: 'Richardson', email: 'cao.yu@devias.io', company: 'Reading Schmeading', shippingAddress: 'Parkersburg, West Virginia, USA' },
    { number: 3, avatar: userAvartar3, firstName: 'Anje', lastName: 'Keizer', email: 'anje.keizer@devias.io', company: 'Healthcare Support Co Ltd.', shippingAddress: 'AAAAA, London, England' },
    { number: 4, avatar: userAvartar4, firstName: 'Clarke', lastName: 'Gillebert', email: 'clarke.gillebert@devias.io', company: 'Reading Schmeading', shippingAddress: 'Parkersburg, West Virginia, USA' },
    { number: 5, avatar: userAvartar5, firstName: 'Adam ', lastName: 'Denisov', email: 'adam.denisov@devias.io', company: 'Healthcare Support Co Ltd.', shippingAddress: 'Parkersburg, West Virginia, USA' },
    { number: 6, avatar: userAvartar6, firstName: 'Ava ', lastName: 'Gregoraci', email: 'ava.gregoraci@devias.io', company: 'Healthcare Support Co Ltd.', shippingAddress: 'Parkersburg, West Virginia, USA' },
    { number: 7, avatar: userAvartar7, firstName: 'Emilee ', lastName: 'Simchenko', email: 'emilee.simchenko@devias.io', company: 'Healthcare Support Co Ltd.', shippingAddress: 'AAAAA, London, England' },
];


class UsersPage extends React.Component {

  state = {
    modal: false,
  }

  toggle = modalType => () => {
    return this.setState({
      modal: !this.state.modal,
    });
  }

  render() {

  const deleteUser = () => {
    alert('delete');
  }

  return (
    <Page title="Users" >
    
      <Row>
        <Table striped hover>
          <thead>
            <tr>
              {/* <th style={{width: '5%', textAlign: 'center'}}>Id</th> */}
              <th style={{width: '5%', textAlign: 'center'}}></th>
              <th style={{width: '10%', textAlign: 'left'}}>First Name</th>
              <th style={{width: '10%', textAlign: 'left'}}>Last Name</th>
              <th style={{width: '15%', textAlign: 'left'}}>Email</th>
              <th style={{width: '25%', textAlign: 'left'}}>Company</th>
              <th style={{width: '25%', textAlign: 'left'}}>Shipping Address</th>
              <th style={{width: '5%', textAlign: 'left'}}>Action</th>
            </tr>
          </thead>
          <tbody>

            {users.map(({ number, avatar, firstName, lastName, email, company, shippingAddress }, index) => (
              <tr key={index}>
                {/* <td style={{width: '5%', textAlign: 'center'}}>{number}</td> */}
                <td style={{width: '5%', textAlign: 'right'}}>
                    <Avatar src={ avatar }>
                        
                    </Avatar>
                </td>
                <td style={{width: '10%', textAlign: 'left'}}>{firstName}</td>
                <td style={{width: '10%', textAlign: 'left'}}>{lastName}</td>
                <td style={{width: '15%', textAlign: 'left'}}>{email}</td>
                <td style={{width: '25%', textAlign: 'left'}}>{company}</td>
                <td style={{width: '30%', textAlign: 'left'}}>{shippingAddress}</td>
                <td style={{width: '5%', textAlign: 'left'}}>
                    <MdEdit style={{color: 'green', cursor: 'pointer', fontSize: 20}}  onClick={this.toggle()}/>
                    &nbsp;&nbsp;
                    <MdDelete style={{color: 'red', cursor: 'pointer', fontSize: 20}} onClick={deleteUser} />
                </td>
              </tr>
            ))}     

            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle()} 
              >
              <ModalHeader toggle={this.toggle()}>Update Profile</ModalHeader>
              <ModalBody>

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
                        &nbsp;&nbsp;&nbsp;
                        <Button color="info">Cancel</Button>
                    </Col>
                </FormGroup>

              </ModalBody>
            </Modal>

          </tbody>
        </Table>
      </Row>
      
    </Page>
  );
  }
};

export default UsersPage;
