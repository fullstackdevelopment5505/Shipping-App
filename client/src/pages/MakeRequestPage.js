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
  Table,
} from 'reactstrap';

import {
  Card,
  CardHeader,
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
} from '@material-ui/core';

import { IconWidget } from 'components/Widget';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ClearIcon from '@material-ui/icons/Clear';

import {
  MdAttachMoney,
  MdAddCircle,
  MdShoppingCart,
  MdShoppingBasket,
  MdAssistantPhoto,
  MdKeyboardReturn,
  MdLocalShipping,
  MdReply,
  MdHistory,
  MdAddShoppingCart,
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

import { connect } from "react-redux";
import { newOrder } from "../actions/packageActions";

class MakeRequestPage extends React.Component {

  state = {
    modalNewOrder: false,
    modalPayForMe: false,
    modalPayForMePayment: false,
    modalTestMyItem: false,
    modalReturnItem: false,
    modalShipItem: false,
    modalPaymentRecord: false,
    amount: 1,
    payForMePrice: {
      price: 50.00,
      serviceCharge: 10.00,
      totalPrice: 60.00,
    },
    payForMeRows: [
      {      
        no: 1,
        url: "",
        itemName: "",
        description: "",
        quantity: 1,
        price: 0.00,
      },
    ],
    paymentOption: {
      paypal: false,
      bitcoin: false,
      creditCard: false,
    },
    newOrder_trackingNo: "",
    newOrder_description: "",
    newOrder_quantity: 1,
  };

  showNewOrder = modalType => () => {
    // if(!modalType) {
      return this.setState({
        modalNewOrder: !this.state.modalNewOrder,
      });
    // }
  };

  submitNewOrder = modalType => () => {
    var order = {
      owner: this.props.currentUser._id,
      trackingNo: this.state.newOrder_trackingNo,
      description: this.state.newOrder_description,
      quantity: this.state.newOrder_quantity
    }

    this.props.newOrder(order);

    this.setState({
      newOrder_trackingNo: "",
      newOrder_description: "",
      newOrder_quantity: 1,
      modalNewOrder: !this.state.modalNewOrder
    });

  };

  payForMe = modalType => () => {

    this.setState({
      modalPayForMe: !this.state.modalPayForMe,
    })
  }

  addPayForMeItem = (e) => {
    const item = {
      no: this.state.payForMeRows.length + 1,
      url: "",
      itemName: "",
      description: "",
      quantity: 1,
      price: 0.00,
    };

    this.setState({
      payForMeRows: [...this.state.payForMeRows, item]
    });
  };

  payForMeHandleChange = (idx) => e => {

    const { name, value } = e.target;

    //Price field validation
    if(name === "price") {
      if(value.match(/^[1-9]+[0-9]*/)) {
        console.log("true");
      } else {
        console.log("false");
      }
    }

    const rows = [...this.state.payForMeRows];
    const oneItem = rows[idx];
    rows[idx] = {
      ...oneItem,
      [name] : value
    };
    this.setState({
      payForMeRows: [...rows]
    })

  }

  payForMeHandleRemove = (idx) => () => {
    const rows = [...this.state.payForMeRows];
    rows.splice(idx, 1)
    this.setState({
      payForMeRows: rows
    });
  }

  payForMeCancel = modalType => () => {

    if( this.state.modalPayForMe ) {
      this.setState({
        payForMeRows: [{}],
        modalPayForMe: !this.state.modalPayForMe,
      })
    }

  }

  payForMeSave = modalType => () => {

    if( this.state.modalPayForMe ) {
      this.setState({
        // payForMeRows: [{}],
        modalPayForMe: !this.state.modalPayForMe,
      })
    }

  }

  payForMePayment = modalType => () => {
    this.setState({
      modalPayForMe: false,
      modalPayForMePayment: !this.state.modalPayForMePayment,
    })
  }

  handlePaymentOption = (e) => {
    switch(e.target.value) {
      case "paypal":
        this.setState(prevStatus => ({
          paymentOption: {
            ...prevStatus.paymentOption,
            paypal: true,
            bitcoin: false,
            creditCard: false,
          }
        }));
        break;
      case "bitcoin":
        this.setState(prevStatus => ({
          paymentOption: {
            ...prevStatus.paymentOption,
            paypal: false,
            bitcoin: true,
            creditCard: false,
          }
        }));
        break;
      case "creditCard":
        this.setState(prevStatus => ({
          paymentOption: {
            ...prevStatus.paymentOption,
            paypal: false,
            bitcoin: false,
            creditCard: true,
          }
        }));
        break;

      default:
        this.setState(prevStatus => ({
          paymentOption: {
            ...prevStatus.paymentOption,
            paypal: false,
            bitcoin: false,
            creditCard: false,
          }
        }));
        break;
    }
  }

  testMyItem = modalType => () => {
    return this.setState({
      modalTestMyItem: !this.state.modalTestMyItem,
    })
  }

  returnItem = modalType => () => {

    window.location = "/receivedPackage";
    // return this.setState({
    //   modalReturnItem: !this.state.modalReturnItem,
    // })
  }

  shipItem = modalType => () => {
    window.location = "/receivedPackage";
    // return this.setState({
    //   modalShipItem: !this.state.modalShipItem,
    // })
  }

  paymentRecord = modalType => () => {
    window.location = "/paymentRecord";
    // return this.setState({
    //   modalPaymentRecord: !this.state.modalPaymentRecord,
    // })
  }

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
      <Page title="Make a Request" >
      
        <Row style={{paddingTop: 20}}>
 
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button color="success" outline className="mr-1" style={{width:'100%', height: '100%'}} onClick={this.showNewOrder()}>
              <MdShoppingCart style={{fontSize: 50 }}/> <h4>New Order</h4> 
            </Button>
          </Col>  

          <Modal
            isOpen={this.state.modalNewOrder}
            toggle={this.showNewOrder()}
            size="lg"
            backdrop="static"
            >

              <ModalHeader toggle={this.showNewOrder()}><Label>Submit new Order</Label></ModalHeader>
              <ModalBody>

              <FormGroup row style={{marginTop: 20}}>
                <Col lg={3} sm={4} xs={12} >
                  <TextField
                    fullWidth
                    helperText=""
                    label="Tracking no"
                    variant="outlined"
                    // margin="dense"
                    name="newOrder_trackingNo"
                    onChange={this.handleChange}
                    value={this.state.newOrder_trackingNo}
                    required
                  />
                </Col>

                <Col lg={6} sm={8} xs={12} >
                  <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    multiline
                    placeholder=""
                    name="newOrder_description"
                    onChange={this.handleChange}
                    value={this.state.newOrder_description}
                    required
                  />
                </Col>

                <Col lg={3} sm={8} xs={12} >
                  <TextField
                      fullWidth
                      helperText=""
                      variant="outlined"
                      label="Number of Item"
                      // margin="dense"
                      name="newOrder_quantity"
                      onChange = {this.handleChange}
                      value={this.state.newOrder_quantity}
                      required
                    />
                </Col>
              </FormGroup>

              {/* <FormGroup row style={{marginTop: 40}}> */}

                {/* <Col xl={9} lg={8} sm={6} xs={6} >
                  <IconButton color="primary" aria-label="add an alarm">
                    <MdAddCircle onClick={this.addNewOrder} />
                  </IconButton>
                </Col> */}

              <>
                  <MaterialBtn 
                      color="primary"
                      variant="contained"
                      className="float-right"
                      onClick={this.submitNewOrder()}
                      style={{marginRight:10}}
                    >
                      Submit
                  </MaterialBtn>
              </>

            </ModalBody>
          </Modal>

          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button color="success" outline className="mr-1" style={{width:'100%', height: '100%'}} onClick={this.payForMe()}>
              <MdShoppingBasket style={{fontSize: 50 }}/> <h4>Pay 4 me</h4> 
            </Button>
  
            <Modal
              isOpen={this.state.modalPayForMe}
              toggle={this.payForMe()}
              className={this.props.className}
              size="xl"
              backdrop="static">

              {/* <ModalHeader toggle={this.payForMe()}>Pay 4 me</ModalHeader> */}
              <ModalBody>

                <h3 style={{marginBottom: 30}}>Pay 4 me</h3>

                <Table borderless>
                  <thead style={{backgroundColor: '#dadddd'}}>        
                    <tr >
                      <th style={{width: '5%', textAlign: 'center'}}>No</th>
                      <th style={{width: '30%', textAlign: 'center'}}>URL</th>
                      <th style={{width: '15%', textAlign: 'center'}}>Item Name</th>
                      <th style={{width: '25%', textAlign: 'center'}}>Description</th>
                      <th style={{width: '10%', textAlign: 'center'}}>Quantity</th>
                      <th style={{width: '10%', textAlign: 'center'}}>Price</th>
                      <th style={{width: '5%', textAlign: 'center'}}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.payForMeRows.map((item, idx) => (
                    
                      <tr key={idx}>
                        <td style={{width: '5%', textAlign: 'center'}}>
                          {idx + 1}
                        </td>
                        <td style={{width: '30%', textAlign: 'center'}}>
                          <TextField
                            fullWidth
                            helperText=""
                            label=""
                            // margin="dense"
                            name="url"
                            placeholder="Input url of the item."
                            onChange={this.payForMeHandleChange(idx)}
                            required
                            value={item.url}
                          />                        
                        </td>
                        <td style={{width: '15%', textAlign: 'center'}}>
                          <TextField
                            fullWidth
                            helperText=""
                            label=""
                            // margin="dense"
                            name="itemName"
                            placeholder="Input item's name."
                            onChange={this.payForMeHandleChange(idx)}
                            required
                            value={item.itemName}
                          />                        
                        </td>
                        <td style={{width: '30%', textAlign: 'center'}}>
                          <TextField
                            fullWidth
                            multiline
                            helperText=""
                            label=""
                            // margin="dense"
                            name="description"
                            placeholder="This is item's description"
                            onChange={this.payForMeHandleChange(idx)}
                            required
                            value={item.description}
                          />                        
                        </td>
                        <td style={{width: '10%', textAlign: 'center'}}>
                          <TextField
                            fullWidth
                            helperText=""
                            label=""
                            // margin="dense"
                            name="quantity"
                            placeholder="Quantity"
                            onChange={this.payForMeHandleChange(idx)}
                            required
                            value={item.quantity}
                          />    
                        </td>
                        <td style={{width: '10%', textAlign: 'center'}}>
                          <TextField
                            fullWidth
                            helperText=""
                            label=""
                            // margin="dense"
                            name="price"
                            placeholder="Price"
                            onChange={this.payForMeHandleChange(idx)}
                            required
                            value={item.price}
                          />    
                        </td>
                        <td style={{width: '5%', textAlign: 'center'}}>
                          <ClearIcon 
                            onClick={this.payForMeHandleRemove(idx)}
                            style={{cursor: 'pointer'}}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                
                <FormGroup style={{textAlign: "center", marginTop: 30}}>
                  Price: $ {this.state.payForMePrice.price}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Service Charge: $ {this.state.payForMePrice.serviceCharge}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Total Price: $ {this.state.payForMePrice.totalPrice}
                </FormGroup>
                
                <FormGroup style={{marginTop: 30}}>

                  <AddCircleIcon                     
                    color="primary"
                    // variant="contained"
                    style={{ size: 50, cursor: 'pointer', marginLeft: 20 }}
                    className="float-left"
                    onClick={this.addPayForMeItem} />
    
                  <MaterialBtn 
                    color="default"
                    variant="contained"
                    className="float-right"
                    style={{marginRight:10}}
                    onClick={this.payForMeCancel()}
                    >
                      Cancel
                  </MaterialBtn>

                  <MaterialBtn 
                    color="primary"
                    variant="contained"
                    className="float-right"
                    style={{marginRight:10}}
                    onClick={this.payForMePayment()}
                    >
                      Submit
                  </MaterialBtn>
    
                  <MaterialBtn 
                    color="secondary"
                    variant="contained"
                    className="float-right"
                    style={{marginRight:10}}
                    onClick={this.payForMeSave()}
                    >
                      Save
                  </MaterialBtn>

                </FormGroup>
              </ModalBody>
            </Modal>

            <Modal
              isOpen={this.state.modalPayForMePayment}
              toggle={this.payForMePayment()}
              size="md"
              backdrop="static"
            >

              <ModalHeader toggle={this.payForMePayment()}>Payment</ModalHeader>
              <ModalBody>

                <FormGroup>
                  Select Payment Option:
                </FormGroup>

                <FormGroup row style={{marginTop: 20}}>
                    <NativeSelect
                      // value={state.age}
                      onChange={this.handlePaymentOption}
                      name="paymentOption"
                      className={{marginTop: 10}}
                      inputProps={{ 'aria-label': 'age' }}
                      style={{marginLeft: 30, fontSize: 18}}
                    >
                      <option value="">- Select -</option>
                      <option value="paypal">Paypal</option>
                      <option value="bitcoin">Bitcoin</option>
                      <option value="creditCard">Credit Card</option>
                    </NativeSelect>
                </FormGroup>
                
                <FormControl className="float-right">
                {this.state.paymentOption.paypal
                    ? <PaypalExpressBtn env={'sandbox'} client={this.client} currency={'USD'} total={this.state.amount} onError={this.onError} onSuccess={this.onSuccess} onCancel={this.onCancel} />
                    : null
                  }
                  {this.state.paymentOption.bitcoin
                    ? <MaterialBtn 
                        color="primary"
                        variant="contained"
                        className="float-right"
                        style={{marginRight:10}}
                        // onClick={this.payForMeSave()}
                      >
                        BitCoin
                      </MaterialBtn>
                    : null
                  }
                  {this.state.paymentOption.creditCard
                    ? <MaterialBtn 
                        color="secondary"
                        variant="contained"
                        className="float-right"
                        style={{marginRight:10}}
                        // onClick={this.payForMeSave()}
                      >
                        Credit Card
                      </MaterialBtn>
                    : null
                  }
                </FormControl>

              </ModalBody>
            </Modal>

          </Col>

          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button outline color="success" className="mr-1" style={{width:'100%', height: '100%'}} onClick={this.testMyItem()}>
              <MdAssistantPhoto style={{fontSize: 50 }}/> <h4>Test My Item</h4> 
            </Button>
  
            <Modal
              isOpen={this.state.modalTestMyItem}
              toggle={this.testMyItem()}
              className={this.props.className}>
              <ModalHeader toggle={this.testMyItem()}>Test My Item</ModalHeader>
              <ModalBody>

                <FormGroup row>
                    <Label sm={3}>
                        Name
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Input the test item name."
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={3}>
                        Description
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="textarea"
                            name="name"
                            placeholder="Input the description."
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={3}>
                        Test Information
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="textarea"
                            name="name"
                            placeholder="Input test information."
                        />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 9 }}>
                      <Button>Submit</Button>
                  </Col>
                </FormGroup>

              </ModalBody>
            </Modal>
          </Col>                
              
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button outline color="success" className="mr-1" style={{width:'100%', height: '100%'}} onClick={this.returnItem()}>
              <MdReply style={{fontSize: 50 }}/> <h4>Return Item</h4> 
            </Button>
          </Col>  
              
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button outline color="success" className="mr-1" style={{width:'100%', height: '100%'}} onClick={this.shipItem()}>
              <MdLocalShipping style={{fontSize: 50 }}/> <h4>Ship Item</h4> 
            </Button>
          </Col>  
              
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Button outline color="success" className="mr-1" style={{width:'100%', height: '100%'}} onClick={this.paymentRecord()}>
              <MdHistory style={{fontSize: 50 }}/> <h4>Payment Record</h4> 
            </Button>
          </Col> 

        </Row>
  
      </Page>
    );
  
  }
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(
  mapStateToProps,
  {
    newOrder
  }
)(MakeRequestPage);
