import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import overlayWhiteDot from '~/assets/images/overlay_white.png';
import overlayBlackDot from '~/assets/images/overlay_black.png';
import { ThemeModes } from '~/constants/theme';
import { BLACK, BLACK_90, WHITE, WHITE_80 } from '~/constants/colors';

const write1 = keyframes`
  0% { stroke-dashoffset: 1200; }
  15%, 20% { stroke-dashoffset: 430; }
  25%, 35% { stroke-dashoffset: 390; }
  51%, 80% { stroke-dashoffset: 0; }
`;

const write2 = keyframes`
  0%, 55% { stroke-dashoffset: 360; }
  58%, 60% { stroke-dashoffset: 0; }
`;

const write3 = keyframes`
  0%, 65% { stroke-dashoffset: 40; }
  70% { stroke-dashoffset: 0; }
`;

export const LoaderBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: white;

  #signature {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 10%;
    margin: 0 auto;
    padding: 2em 0;
  }

  path {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-dashoffset: 0;
  }

  ${({ theme }) =>
    theme.mode === ThemeModes.Dark
      ? `
    background: ${BLACK_90} url(${overlayBlackDot}) repeat scroll 0 0;
    path {
      stroke: ${WHITE};
    }
  `
      : `
    path {
      stroke: ${BLACK};
    }
    background: ${WHITE_80} url(${overlayWhiteDot}) repeat scroll 0 0;
  `}

  .stroke-I {
    stroke-dasharray: 1200;
    animation: ${write1} 2s;
  }

  .stroke-an {
    stroke-dasharray: 360;
    animation: ${write2} 2s;
  }

  .stroke-flourish {
    stroke-dasharray: 40;
    animation: ${write3} 2s;
  }
`;
