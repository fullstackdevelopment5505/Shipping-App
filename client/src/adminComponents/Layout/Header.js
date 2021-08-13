// import Avatar from 'components/Avatar';
import Avatar from '@material-ui/core/Avatar';
import { UserCard } from 'components/Card';
import Notifications from 'components/Notifications';
import SearchInput from 'components/SearchInput';
import { notificationsData, mailsData } from 'demos/header';
import withBadge from 'hocs/withBadge';
import React from 'react';
import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdMailOutline,
  MdMail,
  MdPersonPin,
  MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  ListGroup,
  ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  Label,
} from 'reactstrap';
import bn from 'utils/bemnames';
import Mails from '../Mails';
import { connect } from "react-redux";
import { signout } from "../../actions/userActions";

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);


const MdMailActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>3</small>,
})(MdMail);

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isOpenMailPopover: false,
    isNotificationConfirmed: false,
    isMailConfirmed: false,
    isOpenUserCardPopover: false,
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleMailPopover = () => {
    this.setState({
      isOpenMailPopover: !this.state.isOpenMailPopover,
    });

    if (!this.state.isMailConfirmed) {
      this.setState({ isMailConfirmed: true });
    }
  };  

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  signout = () => {
    this.props.signout();
  }

  render() {
    const { isNotificationConfirmed } = this.state;
    const { isMailConfirmed } = this.state;

    return (
      <Navbar light expand className={bem.b('bg-white')}>
        {/* <Nav navbar className="mr-2"> */}
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        {/* </Nav>
        <Nav navbar>
          <SearchInput />
        </Nav> */}

        <Label sm={8}>
          Welcome to {this.props.currentUser.firstName + "  " + this.props.currentUser.lastName }!
        </Label>

        <Nav navbar className={bem.e('nav-right')}>
          {/* <NavItem className="d-inline-flex">
            <NavLink id="Popover3" className="position-relative">
              {isMailConfirmed ? (
                <MdMailOutline
                  size={25}
                  className="text-secondary can-click"
                  onClick={this.toggleMailPopover}
                />
              ) : (
                <MdMailActiveWithBadge
                  size={25}
                  className="text-secondary can-click animated swing infinite"
                  onClick={this.toggleMailPopover}
                />
              )}
            </NavLink>
            <Popover
              placement="bottom"
              isOpen={this.state.isOpenMailPopover}
              toggle={this.toggleMailPopover}
              target="Popover3"
            >
              <PopoverBody>
                <Mails MailsData={mailsData} />
              </PopoverBody>
            </Popover>
          </NavItem> */}

          <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
              {isNotificationConfirmed ? (
                <MdNotificationsNone
                  size={25}
                  className="text-secondary can-click"
                  onClick={this.toggleNotificationPopover}
                />
              ) : (
                <MdNotificationsActiveWithBadge
                  size={25}
                  className="text-secondary can-click animated swing infinite"
                  onClick={this.toggleNotificationPopover}
                />
              )}
            </NavLink>
            <Popover
              placement="bottom"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
              <PopoverBody>
                <Notifications notificationsData={notificationsData} />
              </PopoverBody>
            </Popover>
          </NavItem>

          <NavItem>
            <NavLink id="Popover2">
              {/* <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              /> */}
              <Avatar 
                // alt="Remy Sharp" 
                src={this.props.currentUser.avatar}
                // src="/assets/img/users/100_15.jpg"
                onClick={this.toggleUserCardPopover}
                className="can-click"/>

            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-1"
              style={{ minWidth: 150 }}
            >
              <PopoverBody className="p-0 border-light">
                {/* <UserCard
                  title="Jane"
                  subtitle="jane@jane.com"
                  text="Last updated 3 mins ago"
                  className="border-light"
                > */}
                  {/* <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdPersonPin /> Profile
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdInsertChart /> Stats
                    </ListGroupItem> */}
                    {/* <ListGroupItem tag="button" action className="border-light">
                      <MdMessage /> Messages
                    </ListGroupItem> */}
                    {/* <ListGroupItem tag="button" action className="border-light">
                      <MdSettingsApplications /> Settings
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdHelp /> Help
                    </ListGroupItem> */}
                    <ListGroupItem tag="button" action className="border-light" onClick={this.signout} >
                      <MdExitToApp /> Signout
                    </ListGroupItem>
                  {/* </ListGroup> */}
                {/* </UserCard> */}
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(
  mapStateToProps,
  { signout }
)(Header);
