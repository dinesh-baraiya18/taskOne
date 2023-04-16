import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header>
      <div className="container">
        <nav>
          <Link to="/" className="logo-wrapper">
            Task1
          </Link>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="head-and-tail">Head and Tail</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  background: #555;
  color: #fff;
  padding: 15px 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    .logo-wrapper {
      font-size: 20px;
      color: #fff;
    }

    ul {
      display: flex;
      gap: 20px;

      li a {
        color: #fff;

        &.active {
          text-decoration: underline;
        }
      }
    }
  }
`;
