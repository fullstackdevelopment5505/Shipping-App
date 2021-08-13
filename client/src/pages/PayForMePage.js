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

import ImportExportIcon from '@material-ui/icons/ImportExport';

import { connect } from "react-redux";
import { newOrder } from "../actions/packageActions";

import MakeRequestTabs from './tabs/MakeRequestTabs';
import NumberFormat from 'react-number-format';

const warehouseitems = [
];

const statusColors = {
  PENDING: 'rgb(251, 140, 0)',   //processing
  SAVED: '#757575',   //pay 4 me.
  RECEIVED: '#43a047',  //package is arrived in store
  SHIPPED: 'rgb(229, 57, 53)',    //store send package to user
};

const statusColors2 = {
  DELIVERED: 'blue',    //user got package
  REFUNDED: 'red'   //user refund
};


class PayForMePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
            // items: [...warehouseitems],
            records: [],
        };
    }       // The end of constructor
    
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

      const rows = [...this.state.payForMeRows];
      const oneItem = rows[idx];

      const re = /^[0-9\b]+$/;
      if (!re.test(value)) {
        // console.log(value);
        return;
      } else {
        // console.log("error");
      }

      // rows[idx] = {
      //     ...oneItem,
      //     [name] : value
      // };
      // this.setState({
      //     payForMeRows: [...rows]
      // })

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

      const current_Records = [...this.state.records];
      let oneItem;
      let recordsLength;
      {this.state.payForMeRows.map((item, idx) => (
        recordsLength = current_Records.length,
        oneItem = {
          "no": recordsLength + 1,
          "url": item.url,
          "itemName": item.itemName,
          "description": item.description,
          "quantity": item.quantity,
          "price": item.price,
          "status": "SAVED"
        },
            
        current_Records.push(oneItem)
      ))}
      this.setState({
          records: [...current_Records],
          payForMeRows: [            
            {      
              no: 1,
              url: "",
              itemName: "",
              description: "",
              quantity: 1,
              price: 0.00,
          }]
      })
    }

    payForMePayment = modalType => () => {
      const current_Records = [...this.state.records];
      let oneItem;
      let recordsLength;
      {this.state.payForMeRows.map((item, idx) => (
        recordsLength = current_Records.length,
        oneItem = {
          "no": recordsLength + 1,
          "url": item.url,
          "itemName": item.itemName,
          "description": item.description,
          "quantity": item.quantity,
          "price": item.price,
          "status": "PENDING"
        },
            
        current_Records.push(oneItem)
      ))}
      this.setState({
          records: [...current_Records],
          payForMeRows: [            
            {      
              no: 1,
              url: "",
              itemName: "",
              description: "",
              quantity: 1,
              price: 0.00,
          }]
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
    

    // sortData = sortType => () => {
    
    //     var sortedItems;
    //     switch(sortType) {
    
    //       case "number":
    //         if(this.state.sortAsc[sortType]) {
    //           sortedItems = this.state.items.slice().sort((a, b) => b[sortType] - a[sortType] );
    //         } else {
    //           sortedItems = this.state.items.slice().sort((a, b) => a[sortType] - b[sortType] );
    //         }
    
    //         this.setState(prevStatus => ({
    //           sortAsc: {
    //             ...prevStatus.sortAsc,
    //             number: !this.state.sortAsc.number,
    //           }
    //         }));
    //         break;
    
    //       case "trackingNo":
    //         if(this.state.sortAsc[sortType]) {
    //           sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
    //         } else {
    //           sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
    //         }
    
    //         this.setState(prevStatus => ({
    //           sortAsc: {
    //             ...prevStatus.sortAsc,
    //             trackingNo: !this.state.sortAsc.trackingNo,
    //           }
    //         }));
    //         break;
    
    //         case "shopName":
    //           if(this.state.sortAsc[sortType]) {
    //             sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
    //           } else {
    //             sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
    //           }
      
    //           this.setState(prevStatus => ({
    //             sortAsc: {
    //               ...prevStatus.sortAsc,
    //               shopName: !this.state.sortAsc.shopName,
    //             }
    //           }));
    //           break;
    
    
    //           case "quantity":
    //             if(this.state.sortAsc[sortType]) {
    //               sortedItems = this.state.items.slice().sort((a, b) => b[sortType] - a[sortType] );
    //             } else {
    //               sortedItems = this.state.items.slice().sort((a, b) => a[sortType] - b[sortType] );
    //             }
        
    //             this.setState(prevStatus => ({
    //               sortAsc: {
    //                 ...prevStatus.sortAsc,
    //                 quantity: !this.state.sortAsc.quantity,
    //               }
    //             }));
    //             break;          
    
    //         case "date1":
    //           if(this.state.sortAsc[sortType]) {
    //             sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
    //           } else {
    //             sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
    //           }
      
    //           this.setState(prevStatus => ({
    //             sortAsc: {
    //               ...prevStatus.sortAsc,
    //               date1: !this.state.sortAsc.date1,
    //             }
    //           }));
    //           break;
    
    //         case "date2":
    //           if(this.state.sortAsc[sortType]) {
    //             sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
    //           } else {
    //             sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
    //           }
      
    //           this.setState(prevStatus => ({
    //             sortAsc: {
    //               ...prevStatus.sortAsc,
    //               date2: !this.state.sortAsc.date2,
    //             }
    //           }));
    //           break;
    
    //         case "status":
    //           if(this.state.sortAsc[sortType]) {
    //             sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
    //           } else {
    //             sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
    //           }
      
    //           this.setState(prevStatus => ({
    //             sortAsc: {
    //               ...prevStatus.sortAsc,
    //               status: !this.state.sortAsc.status,
    //             }
    //           }));
    //           break;
    
    //       default:
    //         break;
    //     }
    
    //     this.setState({
    //       items: [...sortedItems],
    //     });
    
    //   }
    
  render() {

    function NumberFormatCustom(props) {
      const { inputRef, onChange, ...other } = props;
    
      return (
        <NumberFormat
          {...other}
          getInputRef={inputRef}
          onValueChange={values => {
            onChange({
              target: {
                value: values.value,
              },
            },
            );
          }}
          thousandSeparator
          isNumericString
          prefix="$ "
        />
      );
    }

    function IntegerFormatCustom(props) {
      const { inputRef, onChange, ...other } = props;
    
      return (
        <NumberFormat
          {...other}
          getInputRef={inputRef}
          onValueChange={values => {
            onChange({
              target: {
                value: values.value,
              },
            },
            );
          }}
          thousandSeparator
          isNumericString
        />
      );
    }

    return (
        <Page title="Pay 4 Me" style={{fontFamily: "Arial, sans-serif" }}>

            <MakeRequestTabs index={0} />
    
            <FormGroup row>
                <Table borderless style={{marginTop: 25}}>
                  <thead>        
                    <tr style={{backgroundColor: '#98a2e9', color: 'white', cursor: 'pointer' }}>
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
                            // onChange={this.payForMeHandleChange(idx)}
                            required
                            // value={item.quantity}
                            InputProps={{
                              inputComponent: IntegerFormatCustom,
                            }}
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
                            // value={item.price}
                            // InputProps={{
                            //   inputComponent: NumberFormatCustom,
                            // }}
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
                </FormGroup>

                <FormGroup style={{marginTop: 30}} row>
                    <Col lg={6}>
                        <AddCircleIcon                     
                            color="primary"
                            // variant="contained"
                            style={{ size: 50, cursor: 'pointer', marginLeft: 20 }}
                            className="float-left"
                            onClick={this.addPayForMeItem} />
                    </Col>    

                    <Col lg={6}>
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
                    </Col>
                </FormGroup>      

                <FormGroup row>
                    <Col lg={5} sm={3} xs={1}>

                    </Col>
                    <span style={{marginTop: 40, fontSize: 30, textAlign: 'center', fontFamily: 'arial'}}>
                        Pay4me Record
                    </span>                    
                </FormGroup>                    

                <FormGroup row>
                    <Table hover>
                        <thead>
                            <tr style={{cursor: 'pointer' }}>
                                <th style={{width: '5%', textAlign: 'center'}}>No</th>
                                <th style={{width: '20%', textAlign: 'center'}}>Url</th>
                                <th style={{width: '9%', textAlign: 'center'}}>Item Name</th>
                                <th style={{textAlign: 'center'}}>Description</th>
                                <th style={{width: '8%', textAlign: 'center'}}>Quantity</th>
                                <th style={{width: '8%', textAlign: 'center'}}>Price</th>
                                <th style={{width: '9%', textAlign: 'center'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
            
                        {this.state.records.map(({ no, url, itemName, description, quantity, price, status }, index) => (
                            <tr key={index}>
                                <td style={{textAlign: 'center', cursor: 'pointer', marginLeft: -50}}>{no}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}}>{url}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}}>{itemName}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}}>{description}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}}>{quantity}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}}>{price}</td>
                                <td style={{textAlign: 'center', cursor: 'pointer'}}>
                                  <div style={{border: '1px ' + statusColors[status] + ' solid', fontWeight: 600, padding: '0', color: statusColors[status], fontSize: '10px', letterSpacing: '.33px' }}>
                                    {status}
                                  </div>
                                </td>
                            </tr>
                        ))}                 

                        </tbody>
                    </Table>
                </FormGroup>


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
)(PayForMePage);
