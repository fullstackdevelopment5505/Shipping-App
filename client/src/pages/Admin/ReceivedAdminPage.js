import React from 'react';

class ReceivedAdminPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      email: '',
      password: '',
      showPassword: false,
      loginStatus: this.props.loginStatus
      // errors: {}
    }

  }
  render() {

    const { errors } = this.props;
    const { loginStatus } = this.props;
    return (
      // <Page style="Admin Page">
        <div>
            This is received admin page.
        </div>
      // </Page>
    );
  }
}

export default ReceivedAdminPage;
