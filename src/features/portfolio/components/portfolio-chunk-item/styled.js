import styled from 'styled-components';
import { Link } from 'react-router5';

import { RED, RED_70, WHITE } from '~/constants/colors';
import {
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
  CHUNK_TYPE_ONE,
  CHUNK_TYPE_TWO,
  CHUNK_TYPE_THREE,
} from '~/constants/portfolio';
import { mirrorEffect } from '~/helpers/mirror-effect';
import { LazyImage } from '~/ui/lazy-image';
import { AnimatedDiv } from '~/animations/animated';

export const LazyImageStyled = styled(LazyImage)`
  display: block;
`;

export const ItemCategoryLabel = styled.span`
  margin-left: 10px;
`;

export const ItemTitle = styled.h4`
  padding: 5px 10px;
  color: ${WHITE};
  background: ${RED};
  transition: left 0.2s, left 0.2s;
`;

export const ItemCategoryName = styled.span`
  padding: 5px 10px;
  color: ${WHITE};
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  background: ${RED};
  border-right: 1px solid transparent;
  outline: 0;
  transition: all 0.8s ease-in-out;
`;

export const ItemOrientationType = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: none;

  &:focus {
    outline: 1px solid ${RED_70};
  }
`;

export const Item = styled(AnimatedDiv)`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid black;

  ${ItemOrientationType} {
    height: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? '50vh'
        : '100%'};
    padding-bottom: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) ? '0' : '100%'};
  }

  ${LazyImageStyled} {
    height: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? 'auto'
        : '100%'};
  }

  ${({ className }) =>
    !className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) &&
    className.includes(CHUNK_TYPE_ONE) &&
    `
    @media (min-width: 600px) {
      &:nth-child(1) {
        opacity: 0.3;
        grid-column: span 2 / auto;
        grid-row: span 2 / auto;
      }

      &:nth-child(2) {
        grid-column: span 3 / auto;
        grid-row: span 2 / auto;
      }
    }
  `}

  ${({ className }) =>
    !className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) &&
    className.includes(CHUNK_TYPE_TWO) &&
    `
    @media (min-width: 600px) {
      &:nth-child(3),
      &:nth-child(4) {
        grid-column: span 2 / auto;
      }
    }
  `}

  ${({ className }) =>
    !className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) &&
    className.includes(CHUNK_TYPE_THREE) &&
    `
    @media (min-width: 600px) {
      &:nth-child(1) {
        grid-column: span 1 / auto;
        grid-row: span 2 / auto;
      }
      &:nth-child(2) {
        grid-column: span 3 / auto;
        grid-row: span 2 / auto;
      }

      &:nth-child(3),
      &:nth-child(4) {
        grid-column: span 2 / auto;
      }
    }
  `}

  ${ItemCategoryName} {
    position: absolute;
    top: 20px;
    right: -100%;
    opacity: 0;
    transition: left 0.4s, right 0.4s, opacity 1.6s;
  }

  ${ItemTitle} {
    position: absolute;
    bottom: 20px;
    left: -100%;
    opacity: 0;
    transition: left 0.4s, opacity 1.6s;
  }

  &:hover {
    border: 1px solid ${RED};
    cursor: pointer;
    opacity: 1;

    ${ItemCategoryName} {
      right: 0;
      opacity: 1;
    }

    ${ItemTitle} {
      left: 0;
      opacity: 1;
    }
  }
`;

export const ItemFigure = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: 1;
  filter: grayscale(100);
  transition: filter 0.8s ease 0s;

  &:hover {
    filter: grayscale(0);
    ${mirrorEffect}
  }
`;
