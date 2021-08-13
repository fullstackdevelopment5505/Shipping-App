import Page from 'components/Page';
import React from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Row, 
  Table, 
  FormGroup, 
  Label, 
  Input,
  Button,
} from 'reactstrap';
import {
    Avatar
} from "@material-ui/core";

import {
    MdEdit,
    MdDelete,
} from 'react-icons/md';

const UploadMediaPage = () => {
  return (
    <Page title="Upload Picture" >

      <Row>
          <Col xl={6} lg={12} md={12}>
            <Card>
                <CardHeader><h4>Upload images and videos</h4></CardHeader>
                <CardBody>
                {/* <Form> */}

                    <FormGroup row>
                        <Label sm={3}>
                            Images
                        </Label>
                        <Col sm={9}>
                          <input type="file" multiple 
                            name="myImage" accept=".png, .jpeg, .jpg" className="multiple-upload" 
                          />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>
                            Videos
                        </Label>
                        <Col sm={9}>
                          <input type="file" multiple 
                            name="myImage" className="multiple-upload" 
                          />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>
                            Images + Videos
                        </Label>
                        <Col sm={9}>
                          <input type="file" multiple 
                            name="myImage" className="multiple-upload" 
                          />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}>
                            Item Description
                        </Label>
                        <Col sm={9}>
                          <Input
                              type="textarea"
                              name="name"
                              placeholder="Input the description."
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
      </Row>

      
    </Page>
  );
};

export default UploadMediaPage;
