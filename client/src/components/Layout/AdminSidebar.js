import logo200Image from 'assets/img/logo/Maytem-Global.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-5.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';

import {
  MdHome,
  MdStore,
  MdHistory,
  MdBuild,
  MdAttachMoney,
  MdSettings,
  MdPeople,
  MdFileUpload,
  MdLocalShipping,
  MdKeyboardArrowDown,

} from 'react-icons/md';

import {
  IoMdPersonAdd
} from 'react-icons/io';

import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

import AndroidIcon from '@material-ui/icons/Android';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: '/homeAdmin', name: 'Home', exact: true, Icon: MdHome },
  { to: '/usersAdmin', name: 'Users', exact: false, Icon: MdPeople },
  { to: '/receivedAdmin', name: 'Received', exact: false, Icon: MdStore },
  { to: '/shippedAdmin', name: 'Shipped', exact: false, Icon: MdLocalShipping },
  { to: '/uploadPackageAdmin', name: 'Upload Package', exact: false, Icon: MdFileUpload },
  { to: '/paymentRecordAdmin', name: 'Payment', exact: false, Icon: MdAttachMoney },
  { to: '/pay4meAdmin', name: 'Pay 4 Me', exact: false, Icon: MdLocalShipping },
  { to: '/orderAdmin', name: 'Order Record', exact: false, Icon: MdHistory },
  // { to: '/makeRequest', name: 'Make a Request', exact: false, Icon: MdBuild },
  // { to: '/calculator', name: 'Calculator', exact: false, Icon: AndroidIcon },
  // { to: '/warehouse', name: 'Warehouse', exact: false, Icon: MdStore },
  // { to: '/purchaseHistory', name: 'Purchase History', exact: false, Icon: MdHistory },
  // { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
  // { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  // { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
];
const navWarehouse = [
  { to: '/receivedPackage', name: 'Received Package', exact: false, Icon: MdHome },
  { to: '/shippedPackage', name: 'Shipped Package', exact: false, Icon: MdHome },
  // { to: '/shippedPackage', name: 'Shipped Package', exact: false, Icon: MdHome },
  // { to: '/deliveredPackage', name: 'Delivered Package', exact: false, Icon: MdHome },
];

const navOrderRecord = [
  // { to: '/expectedOrder', name: 'Expected Order', exact: false, Icon: MdHome },
  { to: '/returnItem', name: 'Return Item', exact: false, Icon: MdHome },
];

const navMakeRequest = [
  { to: '/payForMe', name: 'Pay 4 Me', exact: false, Icon: MdHome },
  { to: '/testMyItem', name: 'Test My Item', exact: false, Icon: MdHome },
  { to: '/expectedOrder', name: 'Expected Item', exact: false, Icon: MdHome },
  { to: '/returnItem', name: 'Return Item', exact: false, Icon: MdHome },
];

const navSettings = [
  { to: '/profile', name: 'Profile', exact: false, Icon: MdHome },
  { to: '/addressbook', name: 'AddressBook', exact: false, Icon: MdHome },
];

const navItems2 = [
  // { to: '/payment', name: 'Payment', exact: true, Icon: MdAttachMoney },
  { to: '/referFriend', name: 'Refer a Friend', exact: true, Icon: IoMdPersonAdd },
];

const navItems3 = [
  { to: '/users', name: 'Users', exact: true, Icon: MdPeople },
  { to: '/uploadMedia', name: 'Upload Picture', exact: true, Icon: MdFileUpload },
];

const pageContents = [
  { to: '/login', name: 'login / signup', exact: false, Icon: MdHome },
  {
    to: '/login-modal',
    name: 'login modal',
    exact: false,
    Icon: MdHome,
  },
];

const bem = bn.create('sidebar');

class AdminSidebar extends React.Component {
  state = {
    isOpenWarehouse: false,
    isOpenOrderRecord: false,
    isOpenMakeRequest: false,
    isOpenPayment: false,
    isOpenSettings: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="170"
                height="50"
                className="pr-2"
                alt=""
              />
            </SourceLink>
          </Navbar>

          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  // className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Warehouse')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdStore className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Warehouse</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenWarehouse
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenWarehouse}>
              {navWarehouse.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                    style={{paddingLeft: 40}}
                  >
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('MakeRequest')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdBuild className={bem.e('nav-item-icon')} />
                  <span className="">Make a Request</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenMakeRequest
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenMakeRequest}>
              {navMakeRequest.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                    style={{paddingLeft: 40}}
                  >
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>


            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Settings')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSettings className={bem.e('nav-item-icon')} />
                  <span className="">Settings</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenSettings
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenSettings}>
              {navSettings.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                    style={{paddingLeft: 40}}
                  >
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {navItems2.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))} */}
  
            {/* <hr />
            {navItems3.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  // className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))} */}

          </Nav>
        </div>
      </aside>
    );
  }
}

export default AdminSidebar;
