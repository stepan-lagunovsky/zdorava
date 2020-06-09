import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white_four.png';
import { DARK_MODE } from 'app/constants/theme';
import {
  BLACK_LIGHTER_95,
  GRAY,
  RED,
  WHITE,
  WHITE_95,
} from 'app/constants/colors';

export const LanguageSwitchBox = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NavigationList = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 170px;
`;

export const NavLinkStyled = styled(BaseLink)`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: ${GRAY};
  font-size: 14px;
  line-height: 70px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0 35px;
  border-bottom: 1px solid transparent;
`;

export const NavigationWrapper = styled.div`
  grid-template-columns: auto 170px;
  background: ${({ theme }) =>
  theme === DARK_MODE
    ? `${BLACK_LIGHTER_95} url(${overlayBlackDot}) repeat scroll 0 0;`
    : `
        ${WHITE_95} url(${overlayWhiteDot}) repeat scroll 0 0;
      `};
  display: grid;
  grid-template-columns: 1fr 170px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  ${NavLinkStyled} {
    ${({ theme }) =>
    theme === DARK_MODE
      ? `
        color: ${GRAY};

          &.active {
            color: ${WHITE};
            border-bottom: 1px solid ${WHITE};

            &:hover {
              color: ${WHITE};
              border-color: ${WHITE};
            }
          }

          &:hover {
            color: ${RED};
            border-color: ${RED};
          }
        `
      : `
          &.active {
            color: ${RED};
            border-bottom: 1px solid ${RED};

            &:hover {
              color: ${RED};
              border-color: ${RED};
            }
          }

          &:hover {
            color: ${RED};
            border-color: ${RED};
          }
        `};
  }
`;