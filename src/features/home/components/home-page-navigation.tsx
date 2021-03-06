import React, { useEffect, useState } from 'react';
import { Trans } from '@lingui/macro';

import homepageGlitchBackground from '~/assets/images/backgrounds/home-bg.jpg';
import homepageGlitchBackgroundMobile from '~/assets/images/backgrounds/homepage-background-tinyfied-mobile.jpg';

import { ROUTE_NAME_ABOUT, ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { PageLinkFadeView as PageLinkFade } from './page-link-fade/page-link-fade-view';
import { DottedOverlay, LazyWinkingBannerBg } from './styled';
import { PerspectiveBanner } from './perspective-banner';

const HomePageNavigation = () => {
  const [bgIsToggling, toggleDefaultBg] = useState(false);

  useEffect(() => {
    const winkTimer = setTimeout(() => {
      toggleDefaultBg(true);
    }, 2000);

    return () => {
      clearTimeout(winkTimer);
    };
  }, []);

  return (
    <nav>
      {bgIsToggling && <LazyWinkingBannerBg bgIsToggling={bgIsToggling} />}
      <PageLinkFade
        routeName={ROUTE_NAME_ABOUT}
        position="left"
        title={<Trans>About</Trans>}
      />
      <PageLinkFade
        routeName={ROUTE_NAME_PORTFOLIO}
        position="right"
        title={<Trans>Portfolio</Trans>}
      />
      <PerspectiveBanner
        src={homepageGlitchBackground}
        srcSet={homepageGlitchBackgroundMobile}
      />
      <DottedOverlay />
    </nav>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePageNavigation;
