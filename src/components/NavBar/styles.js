import styled from 'styled-components';
import {Link as LinkRouter} from '@reach/router'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  height: 50px;
  justify-content: space-around;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  color: #888;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`
