import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { PortfolioItemModel } from '../../../../../models/portfolio-item.model';
import { PORTFOLIO_IMAGES_PATH, SITE_URL } from '../../../../constants/site';
import {
  Item,
  ItemTitle,
  ItemFigure,
  ItemImage,
  ItemCategoryName,
  ItemCategoryLabel,
  ItemOrientationType,
} from './styled';

interface Props extends PortfolioItemModel {
  delayPerPixel: number;
  index: number;
  originIndex: number;
  originOffset: { current: { [key: string]: number } };
  selectedCategory: string;
  chunkType: string;
}

export const PortfolioChunkItemView: React.FC<Props> = ({
  onItemClick,
  selectedCategory,
  category,
  alt,
  name,
  description,
  thumbnailSrc,
  // For animation below
  delayPerPixel,
  index,
  originIndex,
  originOffset,
  chunkType,
}) => {
  const delayRef = useRef<number>(0);
  const offset = useRef<{ top: number; left: number }>({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft,
    };

    if (index === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel, index, originIndex, originOffset]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.sqrt(dx ** 2 + dy ** 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel, originOffset]);

  const imgSrc = `${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}-thumbnail/${thumbnailSrc}`;

  return (
    <Item
      className={`${chunkType} ${selectedCategory}`}
      ref={ref}
      variants={{
        open: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            x: { stiffness: 1000, velocity: -250, duration: 0.4 },
            y: { stiffness: 1000, velocity: -250, duration: 0.4 },
            opacity: { duration: 3 },
          },
        },
        closed: {
          x: 100,
          y: 100,
          opacity: 0,
          transition: {
            x: { stiffness: 1000, duration: 0.4 },
            y: { stiffness: 1000, duration: 0.4 },
            opacity: { duration: 3 },
          },
        },
      }}
      custom={delayRef}
      onClick={onItemClick}
    >
      <ItemOrientationType>
        <ItemFigure>
          <ItemImage
            className="lazyload"
            alt={alt}
            sizes="(min-width: 1000px) 930px, 90vw"
            data-srcset={`${imgSrc} 500w,
            ${imgSrc} 640w,
            ${imgSrc} 1024w`}
            data-src={imgSrc}
          />
        </ItemFigure>
        <ItemCategoryName>
          <FontAwesomeIcon icon={faImage} />
          <ItemCategoryLabel>{name}</ItemCategoryLabel>
        </ItemCategoryName>
        <ItemTitle>{description}</ItemTitle>
      </ItemOrientationType>
    </Item>
  );
};
