import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import {
  GridItem,
  GridLogoWrapper,
  StyledMotionFigure,
  StyledImg,
} from './styled';

interface Logo {
  left: number;
  top: number;
  alt: string;
  src: string;
}

interface Props {
  logos: Logo[];
}

export const AboutLogoView: React.FC<Props> = ({ logos }) => (
  <GridLogoWrapper>
    {logos.map(({ left, top, alt, src }) => (
      <GridItem key={alt}>
        <StyledMotionFigure
          variants={{
            initial: {
              opacity: 0,
              scale: 2,
              left,
              top,
              transition: { duration: 0.2, delay: 0.4 },
            },
            show: {
              opacity: 1,
              left: 0,
              top: 0,
              scale: 1,
              transition: { duration: 1, delay: 1 },
            },
            exit: {
              opacity: 0,
              scale: 2,
              left,
              top,
              transition: { duration: 0.2, delay: 0.4 },
            },
          }}
          initial="initial"
          animate="show"
          exit="exit"
        >
          <StyledImg
            className="lazyload"
            alt={alt}
            sizes="(min-width: 1000px) 930px, 90vw"
            data-srcset={`${src} 500w,
            ${src} 640w,
            ${src} 1024w`}
            data-src={src}
          />
        </StyledMotionFigure>
      </GridItem>
    ))}
  </GridLogoWrapper>
);
