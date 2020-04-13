import React from 'react';
import GlitchEffect from 'react-glitch-effect';
import Typing from 'react-typing-animation';
import { Trans } from '@lingui/macro';

import { HomepageGlitch } from './components/homepage-glitch';
import {
  HomepageContentWrapper,
  HomepageHGroup,
  HomepageTitle,
  HomepageSubtitle,
  WebsiteSubtitle,
  Name,
  SurName,
  GlitchLine,
  Image,
  Divider,
} from './styled';

interface Props {
  bgIsToggling: boolean;
  toggleDefaultBg: (value: boolean) => void;
}

export const HomeView: React.FC<Props> = ({
  bgIsToggling,
  toggleDefaultBg
}: Props) => (
  <>
    <HomepageContentWrapper>
      <HomepageHGroup>
        <Divider />
        <GlitchEffect duration="0.8s">
          <GlitchLine />
        </GlitchEffect>
        <Divider />
        <HomepageTitle>
          <Name>
            <Trans>Stepan</Trans>
          </Name>
          <SurName>
            <Trans>Lagunovsky</Trans>
          </SurName>
        </HomepageTitle>
        <Typing onFinishedTyping={() => toggleDefaultBg(true)}>
          <HomepageSubtitle>FRONT-END DEVELOPER</HomepageSubtitle>
        </Typing>
        <WebsiteSubtitle>
          Zdorava
        </WebsiteSubtitle>
      </HomepageHGroup>
    </HomepageContentWrapper>
    {bgIsToggling && (
      <Image bgIsToggling={bgIsToggling} />
    )}
    <HomepageGlitch />
  </>
);
