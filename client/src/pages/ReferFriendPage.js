import Page from 'components/Page';
import React from 'react';
import inviteImage from 'assets/img/bg/invite.jpg';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

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
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

import {
    Button as MaterialBtn,
    Box,
    InputLabel,
    Snackbar,
    TextField,
} from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ReferFriendPage extends React.Component {

  constructor() {
      super();

      this.state = {
        showMessage: false,
        szMessage: ""
      }

  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }



  render() {

    const CopyCodeBtn = withStyles(theme => ({
        root: {
            height: '100%',
            color: 'white',
            backgroundColor: '#33cccd',
            '&:hover': {
                backgroundColor: '#64dadb',
            },
        },
    }))(MaterialBtn);

    const ShareLinkBtn = withStyles(theme => ({
        root: {
            height: '100%',
            color: 'white',
            backgroundColor: '#33cccd',
            '&:hover': {
                backgroundColor: '#64dadb',
            },
        },
    }))(MaterialBtn);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const closeMessage = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({
            showMessage: false,
            szMessage: "",
        });
    };

    const copyCodeBtnClicked = () => {
        this.setState({
            showMessage: true,
            szMessage: "Referral Code Copied!",
        });

    }

    const copyLinkBtnClicked = () => {
        this.setState({
            showMessage: true,
            szMessage: "Referral Link Copied!",
        });

    }
    
  return (
    <Page title="Refer a Friend" >
    
            <Row >
                <Col lg={12}>
                    {/* <h4>Edit Profile</h4> */}
                    <Card>
                        <CardBody>
                            <FormGroup row>
                                <Col xl={3} md={12} sm={12} xs={12}>
                                    <InputLabel style={{marginTop: 20, paddingRight: 20, fontSize: 14}}>
                                        Share your referral code with friends & get rewarded when they ship with Heroshe
                                    </InputLabel>
                                </Col>          
                                <Col xl={9} md={12} sm={12} xs={12}>
                                    <Box border={1} style={{color: '#eaecee'}}>
                                        <FormGroup row style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
                                            <Col lg={9} style={{marginRight: 0}}>
                                                <TextField
                                                    helperText=""
                                                    label="Your Referral Code"
                                                    variant="outlined"
                                                    name="lastName"
                                                    onChange={this.handleChange}
                                                    value="JD171943716"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    style={{width: '66%'}}
                                                />

                                                <CopyToClipboard 
                                                    // onCopy={this.onCopy} 
                                                    text={"JD171943716"}>

                                                    <CopyCodeBtn
                                                        style={{width: '34%'}}
                                                        onClick={copyCodeBtnClicked}>
                                                        Copy Code
                                                    </CopyCodeBtn>
                                                </CopyToClipboard>

                                                <Snackbar open={this.state.showMessage} autoHideDuration={3000} onClose={closeMessage} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                                                    <Alert onClose={closeMessage} severity="success">
                                                        {this.state.szMessage}
                                                    </Alert>
                                                </Snackbar>
                                            </Col>
                                            <Col lg={3}>
                                                <MaterialBtn
                                                    style={{width: '100%', height: '100%', color: '#33cccd', borderColor: '#33cccd', borderRadius: '15px'}}
                                                    variant="outlined"
                                                    onClick={copyLinkBtnClicked}>

                                                    Copy Link
                                                </MaterialBtn>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                        <Col lg={3}>
                                                <InputLabel style={{fontSize: 15, textAlign: 'center'}}>
                                                    Amount Per Referrals
                                                </InputLabel>
                                                <InputLabel style={{fontSize: 30,paddingTop: 20, color: 'black', textAlign: 'center'}}>
                                                    $ 5
                                                </InputLabel>
                                            </Col>
                                            <Col lg={3}>
                                                <InputLabel style={{fontSize: 15, textAlign: 'center'}}>
                                                    Total Referrals
                                                </InputLabel>
                                                <InputLabel style={{fontSize: 30,paddingTop: 20, color: 'black', textAlign: 'center'}}>
                                                    0
                                                </InputLabel>
                                            </Col>
                                            <Col lg={3}>
                                                <InputLabel style={{fontSize: 15, textAlign: 'center'}}>
                                                    Amount Earned
                                                </InputLabel>
                                                <InputLabel style={{fontSize: 30,paddingTop: 20, color: 'black', textAlign: 'center'}}>
                                                    $ 0
                                                </InputLabel>
                                            </Col>
                                            <Col lg={3}>
                                                <InputLabel style={{fontSize: 15, textAlign: 'center'}}>
                                                    Amount Pending
                                                </InputLabel>
                                                <InputLabel style={{fontSize: 30,paddingTop: 20, color: 'black', textAlign: 'center'}}>
                                                    $ 0
                                                </InputLabel>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row style={{marginLeft: 20}}>
                                            <ShareLinkBtn>
                                                Share Referral Link
                                            </ShareLinkBtn>
                                        </FormGroup>
                                    </Box>

                                    <FormGroup row style={{marginTop: 100}}>
                                        <h4>Referred Users</h4>

                                        <Col lg={12} style={{marginTop: 30}}>
                                            <h5 style={{color: '#33cccd'}}>
                                                You haven’t made any referrals yet
                                            </h5>
                                            <InputLabel>
                                                When users use your referral code to sign up, you’ll see their names here. Start referring today!
                                            </InputLabel>
                                        </Col>

                                    </FormGroup>

                                </Col>          
                            </FormGroup>   

                            <FormGroup>
                            </FormGroup>
        
                        </CardBody>
                    </Card>

                </Col>


            </Row>

        {/* <Row>
            <Col xl={12} md={12} sm={12} xs={12}>
                <CardImg top src={inviteImage} />
            </Col>          
        </Row>

        <Row>
            <Label sm={3}>
                Share your link
            </Label>
        </Row>
        
        <Row>
            <Col xl={8} md={12} sm={12} xs={12}>
                <InputGroup >
                    <Input 
                        value="https://www.shopship.com/site/register?rfrd=3679365.5"
                        readOnly/>
                    <InputGroupAddon addonType="prepend">                
                        <Button color="info">
                          Copy
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col> 
        </Row>

        <hr />

        <Row style={{paddingTop: 15}}>
            <Label xl={8} md={12} sm={12} xs={12}>
                Send your friends an invite email
            </Label>
        </Row>
        
        <Row>
            <Col xl={4} md={8} sm={12} xs={12}>
                <InputGroup >
                    <Input 
                        placeholder="example@email.com"
                     />
                    <InputGroupAddon addonType="prepend">
                        <Button color="primary">
                            Send Invites
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col> 
        </Row> */}
        
    </Page>
  );
}
};

export default ReferFriendPage;
