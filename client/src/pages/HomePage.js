import Page from 'components/Page';
import React from 'react';
import bg11Image from 'assets/img/bg/backgroud_home.jpg';
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
import Carousels from './Carousels';

import { connect } from "react-redux";


class HomePage extends React.Component {

//   constructor(props) {
//       super(props);

//     //   this.state = {
//     //       currentUser: this.props.currentUser
//     //   }
//   }

  render() {

    return (
    <Page title="Home" >
    
      <Row>
        <Col xl={12} md={12} sm={12} xs={0}>
          <Carousels />
        </Col>          
      </Row>

      <Row>

        <Col xl={6} lg={12} md={12}>
            <h4 style={{padding: 8}}>Shopping Address</h4>
            <>
                <Label sm={4} style={{fontSize: 12, color: 'green' }}>
                    Full Name
                </Label>
                <Label sm={8}>
                    {this.props.currentUser.shoppingAddress.fullName}
                </Label>
            </>          

            <>
                <Label sm={4} style={{fontSize: 12, color: 'green' }}>
                    Address line1
                </Label>
                <Label sm={8}>
                    {this.props.currentUser.shoppingAddress.addressLine1}
                </Label>
            </>          

            <>
                <Label sm={4} style={{fontSize: 12, color: 'green' }}>
                    Address line2
                </Label>
                <Label sm={8}>
                    {this.props.currentUser.shoppingAddress.addressLine2}
                </Label>
            </>          

            <>
                <Label sm={4} style={{fontSize: 12, color: 'green' }}>
                    City
                </Label>
                <Label sm={8}>
                    {this.props.currentUser.shoppingAddress.city}
                </Label>
            </>          

            <>
                <Label sm={4} style={{fontSize: 12, color: 'green' }}>
                    State
                </Label>
                <Label sm={8}>
                    {this.props.currentUser.shoppingAddress.state}
                </Label>
            </>          

            <>
                <Label sm={4} style={{fontSize: 12, color: 'green' }}>
                    Zip Code
                </Label>
                <Label sm={8}>
                    {this.props.currentUser.shoppingAddress.zipCode}
                </Label>
            </>          

            <>
                <Label sm={4} style={{fontSize: 12, color: 'green' }}>
                    Phone Number
                </Label>
                <Label sm={8}>
                    {this.props.currentUser.shoppingAddress.phone}
                </Label>
            </>  
        </Col>

        <Col xl={6} lg={12} md={12}>
            <video
                // autoPlay
                preload="auto"
                controls
                width="100%"
                height="100%"
                src="http://media.w3.org/2010/05/bunny/movie.mp4"
            />
        </Col>

      </Row>

      
    </Page>
  );
  }
};


const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(
    mapStateToProps
)(HomePage);
