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
import ProfileTabs from './tabs/ProfileTabs';

const VerificationStatusPage = () => {
  return (
    <Page title="Test My Item" >

        <ProfileTabs index={1} />

        <Row style={{paddingTop: 30}}>
          <Col xl={4} lg={12} md={12}>
            <Card>
                <CardBody>
                    <FormGroup row>
                        <Label sm={3}>
                            ID Card :
                        </Label>
                        <Col sm={6}>
                            <input type="file" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={1}>
                        </Col>
                        <Col sm={9}>
                            <Button style={{width: '100%'}}>Submit</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>
                            Status :
                        </Label>
                        <Label sm={9}>
                            Unverified
                        </Label>
                    </FormGroup>

                </CardBody>
            </Card>
          </Col>
        </Row>
      
    </Page>
  );
};

export default VerificationStatusPage;
