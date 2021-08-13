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
import MakeRequestTabs from './tabs/MakeRequestTabs';
import ComingSoonPage from './ComingSoonPage';

const returnItems = [
  { number: 1, itemName: 'Acer Aspire 5 Slim Laptop', description: 'AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD15.6 inches AMD Ryzen 3 3200U Dual Core Processor', unitPrice: 21.08, quantity: 5 },
  { number: 2, itemName: 'Fitness Magnetic Elliptical Trainer Machine', description: 'Performance monitor: conveniently Track time, distance, speed, Wattage, heart RATE, calories burned, and rotations per minute on the back-lit digital display.', unitPrice: 529.98, quantity: 2 },
  { number: 3, itemName: 'Acer Chromebook Spin 13 CP713-1WN-53NF 2-in-1 Convertible', description: 'Chromebook runs on Chrome OS an operating system by Google that is built for the way we live today.', unitPrice: 231.35, quantity: 1 },
  { number: 4, itemName: 'USB C to HDMI + VGA', description: 'Dual Monitors Setup : This USB Type C to HDMI +VGA adapter is design to mirror or extend the screen USB C to HDMI + VGA 3200U Dual Core Processor', unitPrice: 15.99, quantity: 3 },
  { number: 5, itemName: 'New Balance Women\'s FuelCore Nergize V1 Cross Trainer', description: 'Slip on upper with additional lace up support', unitPrice: 20.07, quantity: 3 },
  { number: 6, itemName: 'GPS Smartwatch with Bright Touchscreen Display', description: 'Beautiful, bright AMOLED display and up to five-day battery life in smartwatch mode; up to six hours in GPS and music mode', unitPrice: 299.99, quantity: 5 },
  { number: 7, itemName: 'TriggerPoint Impact Handheld Percussion 4-Speed Massage Gun', description: '4-speed muscle massage gun delivers targeted pressure to help increase blood flow, hydrate muscle tissue, and improve range of motion pre and post-workout', unitPrice: 99.9, quantity: 12 },

  { number: 8, itemName: 'Fitness Magnetic Elliptical Trainer Machine', description: 'Performance monitor: conveniently Track time, distance, speed, Wattage, heart RATE, calories burned, and rotations per minute on the back-lit digital display.', unitPrice: 529.98, quantity: 2 },
  { number: 9, itemName: 'Acer Chromebook Spin 13 CP713-1WN-53NF 2-in-1 Convertible', description: 'Chromebook runs on Chrome OS an operating system by Google that is built for the way we live today.', unitPrice: 231.35, quantity: 1 },
  { number: 10, itemName: 'USB C to HDMI + VGA', description: 'Dual Monitors Setup : This USB Type C to HDMI +VGA adapter is design to mirror or extend the screen USB C to HDMI + VGA 3200U Dual Core Processor', unitPrice: 15.99, quantity: 3 },
  { number: 11, itemName: 'New Balance Women\'s FuelCore Nergize V1 Cross Trainer', description: 'Slip on upper with additional lace up support', unitPrice: 20.07, quantity: 3 },
];


class ReturnItemPage extends React.Component {

  state = {
    modal: false,
  }

  toggle = modalType => () => {
    return this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
  return (
    <Page title="Return Item" >

      <MakeRequestTabs index={3} />

      <ComingSoonPage />

      {/* <Row>
        <Table striped hover>
          <thead>
            <tr style={{backgroundColor: '#98a2e9', color: 'white'}}>
              <th style={{width: '5%', textAlign: 'center'}}>Id</th>
              <th style={{width: '20%', textAlign: 'center'}}>Item Name</th>
              <th style={{width: '50%', textAlign: 'center'}}>Description</th>
              <th style={{width: '10%', textAlign: 'center'}}>Unit Price</th>
              <th style={{width: '10%', textAlign: 'center'}}>Quantity</th>
              <th style={{width: '5%', textAlign: 'center'}}>Action</th>
            </tr>
          </thead>
          <tbody>

            {returnItems.map(({ number, itemName, description, unitPrice, quantity }, index) => (
                <tr key={index} style={{cursor: 'pointer'}}>
                  <td style={{width: '5%', textAlign: 'center'}} onClick={this.toggle()}>{number}</td>
                  <td style={{width: '20%', textAlign: 'center'}} onClick={this.toggle()}>{itemName}</td>
                  <td style={{width: '60%', textAlign: 'center'}} onClick={this.toggle()}>{description}</td>
                  <td style={{width: '10%', textAlign: 'center'}} onClick={this.toggle()}>{unitPrice}</td>
                  <td style={{width: '10%', textAlign: 'center'}} onClick={this.toggle()}>{quantity}</td>
                  <td style={{width: '5%', textAlign: 'center'}}><Button color='warning' style={{color: '#1a36f7'}}>Return</Button></td>
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
      </Row> */}
      
    </Page>
  );
  }
};

export default ReturnItemPage;
