import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #7e57c2;
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 30px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">CRUD With MERN</Tabs>
        <Tabs to="/all">All User</Tabs>
        <Tabs to="add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
