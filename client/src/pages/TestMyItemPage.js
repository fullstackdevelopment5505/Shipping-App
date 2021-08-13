import Page from 'components/Page';
import React from 'react';
import testItemImage from 'assets/img/bg/testItem.jpg';
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
import MakeRequestTabs from './tabs/MakeRequestTabs';
import ComingSoonPage from './ComingSoonPage';

const TestMyItemPage = () => {
  return (
    <Page title="Test My Item" >

        <MakeRequestTabs index={1} />
        <ComingSoonPage />

        {/* <Row>
            <Col xl={12} md={12} sm={12} xs={0}>
                <CardImg top src={testItemImage} />
            </Col>          
        </Row>

        <Row style={{paddingTop: 30}}>
          <Col xl={6} lg={12} md={12}>
            <Card>
                <CardHeader><h4>Test My Item</h4></CardHeader>
                <CardBody>
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
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>

                </CardBody>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12}>
            <Card>
                <CardHeader><h4>Item Picture</h4></CardHeader>
                <CardBody>
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

                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                    </FormGroup>

                </CardBody>
            </Card>
          </Col>
        </Row> */}
      
    </Page>
  );
};

export default TestMyItemPage;
