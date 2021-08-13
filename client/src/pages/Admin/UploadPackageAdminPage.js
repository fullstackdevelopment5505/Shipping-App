import Page from 'components/Page';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
import { 
  Button,
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Label,
  Row, 
  Table, 
  Modal,
  Media,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
} from 'reactstrap';

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

// import defaultPicture from '../assets/img/products/default-image.jpg';
// import packPicture1 from '../assets/img/products/product_640-1.jpg';
// import packPicture2 from '../assets/img/products/product_640-2.jpg';
// import packPicture3 from '../assets/img/products/product_640-3.jpg';
// import packPicture4 from '../assets/img/products/product_640-4.jpg';
// import packPicture5 from '../assets/img/products/product_640-5.jpg';
// import packPicture6 from '../assets/img/products/product_640-6.jpg';
// import packPicture7 from '../assets/img/products/product_640-7.jpg';

import ImportExportIcon from '@material-ui/icons/ImportExport';
import SearchIcon from '@material-ui/icons/Search';
import TodayIcon from '@material-ui/icons/Today';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

// TBC038034537009
// TBAONT500361196

const warehouseitems = [
  { 
    number: 1, 
    userName: 'William',
    trackingNo: 'TBA619632698000',
    receiptNo: 'A1205678',
    paymentMode: 'Card',
    amountPaid: 250,
    shopName: 'Amazon',
    description: 'AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD15.6 inches AMD Ryzen 3 3200U Dual Core Processor', 
    quantity: 5,
    date1: '2020-02-12',
    date2: '-',
    status: 'DELIVERED',
  },
  { 
    number: 2, 
    userName: 'William',
    trackingNo: 'TBC038034537009',
    receiptNo: 'A0026028',
    paymentMode: 'Card',
    amountPaid: 350,
    shopName: 'Amazon',
    description: 'Performance monitor: conveniently Track time, distance, speed, Wattage, heart RATE, calories burned, and rotations per minute on the back-lit digital display.',
    quantity: 7,
    date1: '2020-02-08',
    date2: '-',
    status: 'DELIVERED',
  },
  { 
    number: 3, 
    userName: 'Sam',
    trackingNo: 'TBAONT500361196',
    receiptNo: 'A26201347',
    paymentMode: 'Bitcoin',
    amountPaid: 119,
    shopName: 'Amazon',
    description: 'Chromebook runs on Chrome OS an operating system by Google that is built for the way we live today.',
    quantity: 4,
    date1: '2020-02-02',
    date2: '2020-02-05',
    status: 'REFUNDED',
  },
  { 
    number: 4, 
    userName: 'James',
    trackingNo: 'TBAONT500361196',
    receiptNo: 'B26210138',
    amountPaid: 256,
    paymentMode: 'Paypal',
    shopName: 'Amazon',
    description: 'Dual Monitors Setup : This USB Type C to HDMI +VGA adapter is design to mirror or extend the screen USB C to HDMI + VGA 3200U Dual Core Processor',
    quantity: 10,
    date1: '2020-02-08',
    date2: '2020-02-08',
    status: 'DELIVERED',
  },
  { 
    number: 5, 
    userName: 'Sam',
    trackingNo: 'TBAONT500361196',
    paymentMode: 'Bitcoin',
    amountPaid: 331,
    receiptNo: 'A2621717',
    shopName: 'Amazon',
    description: 'Slip on upper with additional lace up support',
    quantity: 2,
    date1: '2020-02-11',
    date2: '2020-02-12',
    status: 'REFUNDED',
  },
  { 
    number: 6, 
    userName: 'William',
    trackingNo: 'TBAONT500361196',
    receiptNo: 'C2356920',
    amountPaid: 512,
    paymentMode: 'Paypal',
    shopName: 'Amazon',
    description: 'Beautiful, bright AMOLED display and up to five-day battery life in smartwatch mode; up to six hours in GPS and music mode',
    quantity: 7,
    date1: '2020-02-12',
    date2: '2020-02-12',
    status: 'DELIVERED',
  },
  { 
    number: 7, 
    userName: 'Sam',
    trackingNo: 'TBAONT500361196',
    receiptNo: 'A72027123',
    amountPaid: 259,
    paymentMode: 'Card',
    shopName: 'Amazon',
    description: '4-speed muscle massage gun delivers targeted pressure to help increase blood flow, hydrate muscle tissue, and improve range of motion pre and post-workout',
    quantity: 8,
    date1: '2020-02-12',
    date2: '2020-02-12',
    status: 'DELIVERED',
  },
];

const statusColors = {
  PENDING: 'rgb(251, 140, 0)',   //processing
  PURCHASED: '#757575',   //pay 4 me.
  RECEIVED: '#43a047',  //package is arrived in store
  SHIPPED: 'rgb(229, 57, 53)',    //store send package to user
};

const statusColors2 = {
  DELIVERED: 'blue',    //user got package
  REFUNDED: 'red'   //user refund
};

class UploadPackageAdminPage extends React.Component {

  state = {
    modal: false,
    items: [...warehouseitems],
    sortAsc: {
      number: true,
      trackingNo: false,
      shopName: false,
      quantity: false,
      date1: false,
      date2: false,
      status: false
    },
    search: "",
  }

  toggle = modalType => () => {
    return this.setState({
      modal: !this.state.modal,
    });
  }

  sortData = sortType => () => {
    
    var sortedItems;
    switch(sortType) {

      case "number":
        if(this.state.sortAsc[sortType]) {
          sortedItems = this.state.items.slice().sort((a, b) => b[sortType] - a[sortType] );
        } else {
          sortedItems = this.state.items.slice().sort((a, b) => a[sortType] - b[sortType] );
        }

        this.setState(prevStatus => ({
          sortAsc: {
            ...prevStatus.sortAsc,
            number: !this.state.sortAsc.number,
          }
        }));
        break;

      case "trackingNo":
        if(this.state.sortAsc[sortType]) {
          sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
        } else {
          sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
        }

        this.setState(prevStatus => ({
          sortAsc: {
            ...prevStatus.sortAsc,
            trackingNo: !this.state.sortAsc.trackingNo,
          }
        }));
        break;

        case "shopName":
          if(this.state.sortAsc[sortType]) {
            sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
          } else {
            sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
          }
  
          this.setState(prevStatus => ({
            sortAsc: {
              ...prevStatus.sortAsc,
              shopName: !this.state.sortAsc.shopName,
            }
          }));
          break;


          case "quantity":
            if(this.state.sortAsc[sortType]) {
              sortedItems = this.state.items.slice().sort((a, b) => b[sortType] - a[sortType] );
            } else {
              sortedItems = this.state.items.slice().sort((a, b) => a[sortType] - b[sortType] );
            }
    
            this.setState(prevStatus => ({
              sortAsc: {
                ...prevStatus.sortAsc,
                quantity: !this.state.sortAsc.quantity,
              }
            }));
            break;          

        case "date1":
          if(this.state.sortAsc[sortType]) {
            sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
          } else {
            sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
          }
  
          this.setState(prevStatus => ({
            sortAsc: {
              ...prevStatus.sortAsc,
              date1: !this.state.sortAsc.date1,
            }
          }));
          break;

        case "date2":
          if(this.state.sortAsc[sortType]) {
            sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
          } else {
            sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
          }
  
          this.setState(prevStatus => ({
            sortAsc: {
              ...prevStatus.sortAsc,
              date2: !this.state.sortAsc.date2,
            }
          }));
          break;

        case "status":
          if(this.state.sortAsc[sortType]) {
            sortedItems = this.state.items.slice().sort((a, b) => b[sortType].localeCompare(a[sortType]) );
          } else {
            sortedItems = this.state.items.slice().sort((a, b) => a[sortType].localeCompare(b[sortType]) );
          }
  
          this.setState(prevStatus => ({
            sortAsc: {
              ...prevStatus.sortAsc,
              status: !this.state.sortAsc.status,
            }
          }));
          break;

      default:
        break;
    }

    console.log(sortedItems);

    this.setState({
      items: [...sortedItems],
    });

  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })

    if(event.target.value === ""){
      this.setState({
        items: [...warehouseitems]
      });
      return;
    }

    var searchResult = [];
    for(var i = 0 ; i < warehouseitems.length ; i ++) {
      var item = warehouseitems[i];
        for (var prop in item) {

            if(prop === "packagePicture")
              continue;

            var oneCell = item[prop];
            if(prop === "number" || prop === "quantity"){
              oneCell = item[prop].toString();
            }

            if (oneCell.indexOf(event.target.value) !== -1){
              searchResult.push(item);
              break;
            }
        } 
    }

    this.setState({
      items: [...searchResult],
      search: event.target.value
    })

    // alert(this.state.search);
  }

  render() {
    return (
      <Page title="Upload Package" style={{fontFamily: "Arial, sans-serif" }}>

        <Row style={{paddingTop: 30}}>
          <Col xl={4} lg={12} md={12}>
            <Card>
                <CardBody>
                    <FormGroup row>
                        <Label sm={3}>
                            Select User
                        </Label>
                        <Col sm={9}>
                            <Input
                                type="text"
                                name="name"
                                value="William"
                                // placeholder="Input the test item name."
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>
                            Item No
                        </Label>
                        <Col sm={9}>
                            <Input
                                type="text"
                                name="name"
                                value="001"
                                // placeholder="Input the test item name."
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>
                            File Upload
                        </Label>
                        <Col sm={9}>
                            <input
                                type="file"
                                name="name"
                                // placeholder="Input the test item name."
                            />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label sm={3}>
                            Weight
                        </Label>
                        <Col sm={9}>
                            <Input
                                type="text"
                                name="name"
                                value="12"
                                // placeholder="Input the test item name."
                            />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label sm={3}>
                            Tracking No
                        </Label>
                        <Col sm={9}>
                            <Input
                                type="text"
                                name="name"
                                value=""
                                // placeholder="Input the test item name."
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col sm={3}>

                      </Col>

                      <FormControlLabel
                        sm={9}
                        control={
                          <Checkbox
                            // onChange={handleChange('checkedB')}
                            value="checkedB"
                            color="primary"
                          />
                        }
                        label="generate tracking"
                      />

                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>

                </CardBody>
            </Card>
          </Col>
        </Row>
        
      </Page>
    );
  
  }
};

export default UploadPackageAdminPage;
