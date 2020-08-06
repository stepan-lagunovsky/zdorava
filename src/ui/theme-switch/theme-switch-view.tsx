import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { BLACK, BLACK_30, WHITE, WHITE_30 } from 'constants/colors';
import { Props } from './theme-switch';

import { SwitchBox, SwitchLabel, InputCheckbox, SlideRaw } from './styled';

export const ThemeSwitchView: React.FC<Props> = ({
  onChange,
  checked,
  disabled,
}) => {
  const sunColor = checked ? WHITE_30 : BLACK;
  const moonColor = checked ? WHITE : BLACK_30;
  const iconSize = 'lg';

  return (
    <SwitchBox>
      <FontAwesomeIcon
        style={{ opacity: disabled ? 0.2 : 1 }}
        color={sunColor}
        size={iconSize}
        icon={faSun}
      />
      <SwitchLabel>
        <InputCheckbox
          type="checkbox"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <SlideRaw />
      </SwitchLabel>
      <FontAwesomeIcon
        style={{ opacity: disabled ? 0.2 : 1 }}
        color={moonColor}
        size={iconSize}
        icon={faMoon}
      />
    </SwitchBox>
  );
};