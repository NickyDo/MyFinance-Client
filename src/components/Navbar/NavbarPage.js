import React from 'react';
import {
  Navbar, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa,
} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class NavbarPage extends React.Component {
    state = {
      isOpen: false,
    };

    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    render() {
      return (
        <Navbar color="default-color" dark expand="md">
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav right>
              <NavItem active>
                <NavLink to="#!">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      );
    }
}

export default NavbarPage;