import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import PropTypes from "prop-types";

const UserItem = ({ login, logout, goToProfile }) => (
  <UncontrolledDropdown setActiveFromChild>
    <DropdownToggle tag="a" className="nav-link" caret>
      {login}
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem tag="a" onClick={goToProfile}>
        User's profile
      </DropdownItem>
      <DropdownItem tag="a" onClick={logout}>
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

UserItem.propTypes = {
  login: PropTypes.string,
  goToProfile: PropTypes.func,
  logout: PropTypes.func
};

export default UserItem;
