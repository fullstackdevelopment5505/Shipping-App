import Page from 'components/Page';
import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

import {
  Row, 
  Col, 
  Button, 
  Badge,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { IconWidget } from 'components/Widget';

import {
  MdAttachMoney,
  MdAddCircle,
  MdAddCircleOutline,
  MdRemoveCircle,
  MdLanguage,
  MdLightbulbOutline,
  MdMailOutline,
  MdPlayCircleOutline,
  MdRadio,
  MdSnooze,
  MdThumbsUpDown,
  MdThumbUp,
  MdMonetizationOn,
} from 'react-icons/md';

class PaymentPage extends React.Component {

  state = {
    modal: false,
    amount: 20,
  };

  toggle = modalType => () => {
    // if(!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    // }

    // this.setState({
    //   ['modal_${modalType}']: !this.state['modal_${modalType}'],
    // });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  // Paypal Integration
  onSuccess = (payment) => {
    console.log("The payment was succeeded!", payment);
  }

  onCancel = (data) => {
      console.log('The payment was cancelled!', data);
  }

  onError = (err) => {
      console.log("Error!", err);
  }

  client = {
      sandbox:    'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
      production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
  }


  render() {
    return (
      <Page title="Payment" >
      
        <Row style={{paddingTop: 20}}>
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <IconWidget
              bgColor={'light'}
              icon={MdAttachMoney}
              title={'Balance'}
              subtitle={'+ $0.00'}
            />
          </Col>
  
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button color="success" className="mr-1" style={{width:'100%', height: '100%'}} onClick={this.toggle()}>
              <MdAddCircle style={{fontSize: 50 }}/> <h4>Deposit Money</h4> 
            </Button>
  
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle()}
              className={this.props.className}>
              <ModalHeader toggle={this.toggle()}>Deposit Money</ModalHeader>
              <ModalBody>

                <FormGroup row>
                    <Label sm={3}>
                        Amount
                    </Label>
                    <Col sm={4}>
                        <Input
                            type="number"
                            name="amount"
                            value={this.state.amount}
                            onChange = {this.handleChange}
                            min='0.01'
                        />
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label sm={12}>
                        For paying, select payment type.
                    </Label>
                </FormGroup>
                
                <FormGroup row>
                    <PaypalExpressBtn env={'sandbox'} client={this.client} currency={'USD'} total={this.state.amount} onError={this.onError} onSuccess={this.onSuccess} onCancel={this.onCancel} />                                       
                </FormGroup>

              </ModalBody>
            </Modal>
          </Col>
  
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button color="danger" className="mr-1" style={{width:'100%', height: '100%'}}>
              <MdRemoveCircle style={{fontSize: 50 }}/> <h4>Withdraw Money</h4> 
            </Button>
          </Col>
  
        </Row>
  
      </Page>
    );
  
  }
};

export default PaymentPage;
