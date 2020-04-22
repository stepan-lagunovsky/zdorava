import { createElement, FC, useState } from 'react';
import {useRoute, useRouteNode} from 'react-router5';
import isMobile from 'ismobilejs/dist/isMobile.min';

import {ROUTE_NAME_HOME, routes} from "../../../constants/routes";
import { LAPTOPS } from 'app/constants/mediaDeviceMinWidths';
import { useMediaMinWidth } from 'helpers/use-media-min-width';
import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { NavigationView } from './navigation-view';
import { NavigationMobileView } from './navigation-mobile/navigation-mobile-view';

export const Navigation: FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage
}) => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  const { router } = useRoute();
  const [mobileMenuOpened, toggleBurgerMenu] = useState(false);

  const mediaMinWidthForLaptops = useMediaMinWidth(LAPTOPS);

  const preparedRoutes = topRouteName === ROUTE_NAME_HOME
    ? []
    : routes;

  if (isMobile.any || !mediaMinWidthForLaptops) {
    return createElement(NavigationMobileView, {
      router,
      selectedLanguage,
      onChangeLanguage,
      mobileMenuOpened,
      toggleBurgerMenu,
      preparedRoutes,
    })
  }

  return createElement(NavigationView, {
    router,
    selectedLanguage,
    onChangeLanguage,
    preparedRoutes,
  });
};
