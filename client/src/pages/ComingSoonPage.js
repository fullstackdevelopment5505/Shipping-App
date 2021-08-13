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
  Button,
} from 'reactstrap';

export default class ComingSoonPage extends React.Component {
    render() {

        return (
          <Row>
            <span style={{marginTop: '30vh', marginLeft: '30vw', fontSize: 30, textAlign: 'center', fontFamily: 'arial', color: '#b2bac8'}}>
              Coming Soon...
            </span>
          </Row>  
        );
    }
}
