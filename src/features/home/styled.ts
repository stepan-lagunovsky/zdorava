import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import { DARK_MODE } from 'constants/theme';
import { BLACK_90, DARK_SLATE_GREY, RED, WHITE_80 } from 'constants/colors';
import { noiseAnim, noiseAnimTwo } from 'animations/keyframes/noise';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white_four.png';
import homepageGlitchBg from 'assets/images/homepage-yellow-background.jpg';

export const MotionWrap = styled(motion.div)`
  position: relative;
  height: 100%;
`;

export const Divider = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const HomepageContentWrapper = styled.div`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_90} url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE_80} url(${overlayWhiteDot}) repeat scroll 0 0;`};

  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  position: relative;
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Image = styled.div<{ bgIsToggling: boolean }>`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  animation: ${blink} 0.4s linear;
  opacity: 0;
  transition: opacity 0.4s;
  z-index: 1;

  ${({ bgIsToggling }) =>
    bgIsToggling &&
    `
    background: url(${homepageGlitchBg}) center center no-repeat;
    background-size: cover;
  `};
`;

export const HomepageHGroup = styled.div`
  padding: 20px 0 50px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HomepageTitle = styled.h1`
  color: black;
  font-size: 65px;
  line-height: 80px;
  letter-spacing: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${DARK_SLATE_GREY};
  color: rgba(200, 200, 200, 0.7);

  @media only screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const Name = styled.div`
  display: inline;

  @media only screen and (min-width: 991px) {
    margin-left: 15px;
    margin-right: 30px;
  }

  margin-right: 20px;
`;

export const SurName = styled(Name)`
  margin-top: auto;
`;

export const HomepageSubtitle = styled.div`
  text-align: center;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 5px;
  font-weight: 700;
  color: red;
  height: 18px;
`;

export const WebsiteSubtitle = styled.div`
  font-family: 'Orbitron-Medium', sans-serif;
  font-weight: 700;
  letter-spacing: 33px;
  font-size: 18px;
  left: 13px;
  background: transparent;
  color: transparent;
  line-height: 18px;
  text-transform: uppercase;
  position: relative;
  margin: 5px auto 0;

  &:before,
  &:after {
    content: 'zdorava';
    position: absolute;
    right: 0;
    top: 0;
    color: rgba(200, 200, 200, 0.7);
    text-transform: uppercase;
    background: transparent;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  &:before {
    left: -2px;
    text-shadow: 1px 0 rgba(47, 79, 79, 0.8);
    animation: ${noiseAnimTwo} 3s infinite linear alternate-reverse;
  }

  &:after {
    left: 2px;
    text-shadow: -1px 0 ${RED};
    animation: ${noiseAnim} 4s infinite alternate-reverse;
  }
`;