import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
// import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

import { Provider } from "react-redux";
import store from "./store";

import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';
import VerificationPage from 'pages/VerificationPage';
import PrivateRoute from 'pages/PrivateRoute';

const HomePage = React.lazy(() => import('pages/HomePage'));
const ReceivedPackagePage = React.lazy(() => import('pages/ReceivedPackagePage'));
const ShippedPackagePage = React.lazy(() => import('pages/ShippedPackagePage'));
const DeliveredPackagePage = React.lazy(() => import('pages/DeliveredPackagePage'));
const ExpectedOrderPage = React.lazy(() => import('pages/ExpectedOrderPage'));
const PaymentRecordPage = React.lazy(() => import('pages/PaymentRecordPage'));
const ReturnItemPage = React.lazy(() => import('pages/ReturnItemPage'));
const PayForMePage = React.lazy(() => import('pages/PayForMePage'));
const ItemPicturePage = React.lazy(() => import('pages/ItemPicturePage'));
const TestMyItemPage = React.lazy(() => import('pages/TestMyItemPage'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const AddressbookPage = React.lazy(() => import('pages/AddressbookPage'));
const PaymentPage = React.lazy(() => import('pages/PaymentPage'));
const ReferFriendPage = React.lazy(() => import('pages/ReferFriendPage'));
const UsersPage = React.lazy(() => import('pages/UsersPage'));
const UploadMediaPage = React.lazy(() => import('pages/UploadMediaPage'));
const VerificationStatusPage = React.lazy(() => import('pages/VerificationStatusPage'));
const MakeRequestPage = React.lazy(() => import('pages/MakeRequestPage'));
const WarehousePage = React.lazy(() => import('pages/WarehousePage'));
const CalculatorPage = React.lazy(() => import('pages/CalculatorPage'));

const HomeAdminPage = React.lazy(() => import('pages/Admin/HomeAdminPage'));
const UsersAdminPage = React.lazy(() => import('pages/Admin/UsersAdminPage'));
const ReceivedAdminPage = React.lazy(() => import('pages/Admin/ReceivedAdminPage'));
const ShippedAdminPage = React.lazy(() => import('pages/Admin/ShippedAdminPage'));
const UploadPackageAdminPage = React.lazy(() => import('pages/Admin/UploadPackageAdminPage'));
const PaymentRecordAdminPage = React.lazy(() => import('pages/Admin/PaymentRecordAdminPage'));
const Pay4meAdminPage = React.lazy(() => import('pages/Admin/Pay4meAdminPage'));
const OrderAdminPage = React.lazy(() => import('pages/Admin/OrderAdminPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
      <BrowserRouter basename={getBasename()}>
        {/* <GAListener> */}
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <LoginPage />
              )}
            />

            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <SignupPage />
              )}
            />

            <LayoutRoute
              exact
              path="/verification"
              layout={EmptyLayout}
              component={props => (
                <VerificationPage />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/receivedPackage" component={ReceivedPackagePage} />
                <Route exact path="/shippedPackage" component={ShippedPackagePage} />
                <Route exact path="/deliveredPackage" component={DeliveredPackagePage} />
                <Route exact path="/expectedOrder" component={ExpectedOrderPage} />
                <Route exact path="/paymentRecord" component={PaymentRecordPage} />
                <Route exact path="/returnItem" component={ReturnItemPage} />
                <Route exact path="/payForMe" component={PayForMePage} />
                <Route exact path="/itemPicture" component={ItemPicturePage} />
                <Route exact path="/testMyItem" component={TestMyItemPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/addressbook" component={AddressbookPage} />
                <Route exact path="/payment" component={PaymentPage} />
                <Route exact path="/referFriend" component={ReferFriendPage} />
                <Route exact path="/users" component={UsersPage} />
                <Route exact path="/uploadMedia" component={UploadMediaPage} />
                <Route exact path="/verificationStatus" component={VerificationStatusPage} />
                <Route exact path="/makeRequest" component={MakeRequestPage} />
                <Route exact path="/allPackage" component={WarehousePage} />
                <Route exact path="/calculator" component={CalculatorPage} />

                <Route exact path="/homeAdmin" component={HomeAdminPage} />
                <Route exact path="/usersAdmin" component={UsersAdminPage} />
                <Route exact path="/receivedAdmin" component={ReceivedAdminPage} />
                <Route exact path="/shippedAdmin" component={ShippedAdminPage} />
                <Route exact path="/uploadPackageAdmin" component={UploadPackageAdminPage} />
                <Route exact path="/paymentRecordAdmin" component={PaymentRecordAdminPage} />
                <Route exact path="/pay4meAdmin" component={Pay4meAdminPage} />
                <Route exact path="/orderAdmin" component={OrderAdminPage} />
                
                <PrivateRoute path="/"/>
              </React.Suspense>
            </MainLayout>

          </Switch>
        {/* </GAListener> */}
      </BrowserRouter>
      </Provider>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

const mapStateToProps = state => ({
  auth: state.user.isAuthenticated,
  user: state.user.user
});

export default componentQueries(query)(App);
