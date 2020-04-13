import styled from 'styled-components';
import Masonry from 'react-masonry-component';

import { RED, WHITE, WHITE_20 } from 'app/constants/colors';
import { PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND } from 'app/constants/portfolio';

export const StyledMassonry = styled(Masonry)`
  @media (min-width: 600px) {
    display: grid;
    ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? `
        grid-template-columns: 1fr;
      `
        : `
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
      `};
    height: auto !important;
    margin: 0 auto;
    width: 100%;
    grid-row-gap: 10px;
  }
`;

export const ItemLabel = styled.div`
  color: ${WHITE};
  font-family: Orbitron-Medium, sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  position: absolute;
  right: -100%;
  outline: 0;
  transition: all 0.8s ease-in-out;
  background: ${RED};
  opacity: 0.8;
  border-right: 1px solid transparent;
  width: 80%;
  top: 20px;
  padding: 5px 10px;
`;

export const ItemName = styled.span`
  margin-left: 10px;
`;

export const ItemDescription = styled.div`
  position: absolute;
  bottom: 20px;
  left: -100%;
  transition: all 0.8s ease-in-out;
  background: ${RED};
  opacity: 0.8;
  color: ${WHITE};
  width: 90%;
  padding: 5px 10px;
`;

export const ItemOrientationType = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  display: block;
  width: 100%;
  max-width: none;
  transition: opacity 0.8s;
  object-fit: cover;
  filter: grayscale(100);
  opacity: 1;
`;

export const Item = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative !important;
  left: auto !important;
  top: auto !important;
  transform: none !important;
  opacity: 1;
  width: 100%;

  ${ItemOrientationType} {
    padding-bottom: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) ? '0' : '100%'};
    height: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? '50vh'
        : '100%'};
  }

  ${ItemImage} {
    height: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? 'auto'
        : '100%'};
  }

  ${({ className }) =>
    !className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) &&
    `
    @media (min-width: 600px) {
      &:nth-child(1),
      &:nth-child(11),
      &:nth-child(21) {
        grid-column: span 2;
        grid-row: span 2;
        opacity: 0.3;
      }
      &:nth-child(2),
      &:nth-child(12),
      &:nth-child(22) {
        grid-column: span 3;
        grid-row: span 2;
      }
      &:nth-child(8),
      &:nth-child(18),
      &:nth-child(28) {
        grid-column: span 2;
        opacity: 0.3;
      }
      &:nth-child(7),
      &:nth-child(17),
      &:nth-child(27) {
        grid-column: span 2;
      }
      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(19),
      &:nth-child(20),
      &:nth-child(29),
      &:nth-child(30) {
        grid-column: span 3;
      }
    }
  `};

  &:hover {
    cursor: pointer;
    opacity: 1;

    ${ItemLabel} {
      right: 0;
    }
    ${ItemDescription} {
      left: 0;
    }
  }
`;

export const ItemFigure = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid ${WHITE};
  overflow: hidden;
  transition: all 0.8s ease 0s;

  &:before {
    background: ${WHITE_20} none repeat scroll 0 0;
    box-sizing: border-box;
    content: '';
    height: 100%;
    left: -10%;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale3d(3.5, 3, 2) rotate3d(0, 0, 1, 135deg)
      translate3d(0px, 100%, 0px);
    transition: transform 0.8s ease 0s;
    visibility: hidden;
    width: 120%;
    z-index: 1;
  }

  &:hover {
    border: 1px solid red;

    &:before {
      opacity: 1;
      transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 135deg)
        translate3d(0px, -130%, 0px);
      visibility: initial;
    }

    ${ItemImage} {
      filter: grayscale(0);
      opacity: 1;
    }
  }
`;
