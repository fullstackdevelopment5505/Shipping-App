import Page from 'components/Page';
import React from 'react';
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

const ExpectedOrder = () => {
  return (
    <Page title="Expected Item" >

        <MakeRequestTabs index={2} />

        <ComingSoonPage />

        {/* <Row style={{paddingTop: 30}}>
            <Col xl={6} lg={12} md={12}>
                <Card>
                    <CardBody>

                        <FormGroup row>
                            <Label sm={3}>
                                Item Name
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Input the item name."
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
                                Quantity
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type="number"
                                    name="name"
                                    min="1"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>
                                Unit Price
                            </Label>
                            <Col sm={9}>
                            <Input
                                    type="number"
                                    name="name"
                                    min="1"
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

export default ExpectedOrder;
