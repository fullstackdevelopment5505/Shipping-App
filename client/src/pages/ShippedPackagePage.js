import Page from 'components/Page';
import Carousel from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, {useState} from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Row, 
  Table, 
  Modal,
  Media,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
} from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText} from 'reactstrap';
import classnames from 'classnames';

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

import defaultPicture from '../assets/img/products/default-image.jpg';
import packPicture1 from '../assets/img/products/product_640-1.jpg';
import packPicture2 from '../assets/img/products/product_640-2.jpg';
import packPicture3 from '../assets/img/products/product_640-3.jpg';
import packPicture4 from '../assets/img/products/product_640-4.jpg';
import packPicture5 from '../assets/img/products/product_640-5.jpg';
import packPicture6 from '../assets/img/products/product_640-6.jpg';
import packPicture7 from '../assets/img/products/product_640-7.jpg';

import ImportExportIcon from '@material-ui/icons/ImportExport';
import SearchIcon from '@material-ui/icons/Search';
import TodayIcon from '@material-ui/icons/Today';

import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WarehouseTabs from './tabs/WarehouseTabs';

// TBC038034537009
// TBAONT500361196

const warehouseitems = [
  { 
    number: '001', 
    packagePicture: packPicture1,
    weight: 4.5,
    trackingNo: 'TBA619632698000',
    shopName: 'Amazon',
    description: 'AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD15.6 inches AMD Ryzen 3 3200U Dual Core Processor', 
    quantity: 5,
    date1: '2020-02-12',
    date2: '-',
    status: 'RECEIVED',
  },
  { 
    number: '002', 
    packagePicture: packPicture2,
    weight: 8,
    trackingNo: 'TBC038034537009',
    shopName: 'Amazon',
    description: 'Performance monitor: conveniently Track time, distance, speed, Wattage, heart RATE, calories burned, and rotations per minute on the back-lit digital display.',
    quantity: 7,
    date1: '2020-02-08',
    date2: '-',
    status: 'RECEIVED',
  },
  { 
    number: '003', 
    packagePicture: packPicture3,
    weight: 2.7,
    trackingNo: 'TBAONT500361196',
    shopName: 'Amazon',
    description: 'Chromebook runs on Chrome OS an operating system by Google that is built for the way we live today.',
    quantity: 4,
    date1: '2020-02-02',
    date2: '2020-02-05',
    status: 'RECEIVED',
  },
  { 
    number: '004', 
    packagePicture: packPicture4,
    weight: 11.8,
    trackingNo: 'TBAONT500361196',
    shopName: 'Amazon',
    description: 'Dual Monitors Setup : This USB Type C to HDMI +VGA adapter is design to mirror or extend the screen USB C to HDMI + VGA 3200U Dual Core Processor',
    quantity: 10,
    date1: '2020-02-08',
    date2: '2020-02-08',
    status: 'RECEIVED',
  },
  { 
    number: '005', 
    packagePicture: packPicture5,
    weight: 9.3,
    trackingNo: 'TBAONT500361196',
    shopName: 'Amazon',
    description: 'Slip on upper with additional lace up support',
    quantity: 2,
    date1: '2020-02-11',
    date2: '2020-02-12',
    status: 'RECEIVED',
  },
  { 
    number: '006', 
    packagePicture: packPicture6,
    weight: 4.8,
    trackingNo: 'TBAONT500361196',
    shopName: 'Amazon',
    description: 'Beautiful, bright AMOLED display and up to five-day battery life in smartwatch mode; up to six hours in GPS and music mode',
    quantity: 7,
    date1: '2020-02-12',
    date2: '2020-02-12',
    status: 'RECEIVED',
  },
  { 
    number: '007', 
    packagePicture: packPicture7,
    weight: 2.7,
    trackingNo: 'TBAONT500361196',
    shopName: 'Amazon',
    description: '4-speed muscle massage gun delivers targeted pressure to help increase blood flow, hydrate muscle tissue, and improve range of motion pre and post-workout',
    quantity: 8,
    date1: '2020-02-12',
    date2: '2020-02-12',
    status: 'RECEIVED',
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

class ShippedPackagePage extends React.Component {

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

      case "weight":
        if(this.state.sortAsc[sortType]) {
          sortedItems = this.state.items.slice().sort((a, b) => b[sortType] - a[sortType] );
        } else {
          sortedItems = this.state.items.slice().sort((a, b) => a[sortType] - b[sortType] );
        }

        this.setState(prevStatus => ({
          sortAsc: {
            ...prevStatus.sortAsc,
            weight: !this.state.sortAsc.weight,
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

  changeCheckStatus = (number) => e => {
    // alert(number);
  }

  render() {

    return (
      
      <Page title="Shipped Package" >


        <Row style={{marginTop: -40}}>
          <Col lg="8" xs="0">

          </Col>
          <Col lg="2" xs="6">
            <TextField
              id="searchByDate"
              name="searchByDate"
              value={this.state.searchByDate}
              onChange={this.searchByDate}
              placeholder="Date"
              variant="outlined"
              className="float-right"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TodayIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Col>
          <Col lg="2" xs="6">
            <TextField
              id="searchByItems"
              name="searchByItems"
              value={this.state.searchByItems}
              onChange={this.searchByItems}
              placeholder="Item or Tracking no"
              variant="outlined"
              className="float-right"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Col>
        </Row>

        <WarehouseTabs index={1}/>

        <FormGroup row style={{marginTop: 20}}>
        <Col lg="2" sm="2" xs="0">

        </Col>
        <Col lg="8" sm="8" xs="12">
          <Table hover bordered>
            <thead>
  
              <tr style={{backgroundColor: '#98a2e9', color: 'white', cursor: 'pointer' }}>
                <th style={{width: '8%', textAlign: 'center'}} onClick={this.sortData('number')}>Item No <ImportExportIcon style={{fontSize: 20}}/></th>
                <th style={{width: '10%', textAlign: 'center'}}>Package Picture</th>
                <th style={{width: '9%', textAlign: 'center'}} onClick={this.sortData('weight')}>Weight<ImportExportIcon style={{fontSize: 20}}/></th>
                <th style={{width: '12%', textAlign: 'center'}} onClick={this.sortData('trackingNo')}>Tracking Number <ImportExportIcon style={{fontSize: 20}}/></th>
                <th style={{width: '10%', textAlign: 'center'}} onClick={this.sortData('date1')}>Date <ImportExportIcon style={{fontSize: 20}}/></th>
              </tr>
            </thead>
            <tbody>
  
              {this.state.items.map(({ number, packagePicture, trackingNo, shopName, description, quantity,date1, date2, status, weight }, index) => (
                  <tr key={index}>

                    <td style={{textAlign: 'center', cursor: 'pointer'}} onClick={this.toggle()}>{number}</td>
                    <td style={{textAlign: 'center', cursor: 'pointer'}} onClick={this.toggle()}>
                      {
                        status === "pending" ?
                          <Media
                            object
                            src={defaultPicture}
                            className="rounded mr-2 mb-2"
                            style={{ width: 100, height: 60 }}
                          />                    
                         : (
                          <Media
                            object
                            src={packagePicture}
                            className="rounded mr-2 mb-2"
                            style={{ width: 100, height: 60 }}
                          />                    
                        )
                      }
                   
                    </td>
                    <td style={{textAlign: 'center', cursor: 'pointer'}} onClick={this.toggle()}>{weight} Lb</td>
                    <td style={{textAlign: 'center', cursor: 'pointer'}} onClick={this.toggle()}>{trackingNo}</td>
                    <td style={{textAlign: 'center', cursor: 'pointer'}} onClick={this.toggle()}>{date1}</td>
                  </tr>
              ))}                 

              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle()} 
                >
                    <Carousel />

              </Modal>

            </tbody>
          </Table>
          </Col>
        </FormGroup>
        
      </Page>
    );
  
  }
};

export default ShippedPackagePage;
