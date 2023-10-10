import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #59c6e7;
  padding: 20px 20px;
  box-shadow: rgba(2, 32, 59, 0.35) 0px 5px 15px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;

  color: #02203b;
  text-decoration: none;

  font-size: 30px;
  font-weight: bold;

  &.active {
    color: #fff;
    text-decoration: underline;
  }
`;
