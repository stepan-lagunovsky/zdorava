export interface PortfolioItemModel {
  category: string;
  imageSrc: string;
  alt: string;
  name: string;
  description: string;
  thumbnailSrc: string;
  onItemClick?: () => void;
}
