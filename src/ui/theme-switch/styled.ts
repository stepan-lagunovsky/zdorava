import styled from 'styled-components';

import { BLACK, RED, RED_70, WHITE, WHITE_70 } from 'constants/colors';

export const SwitchBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  align-items: center;
  font-size: 20px;
`;

export const SlideRaw = styled.div`
  width: 56px;
  height: 28px;
  border-radius: 14px;
  display: flex;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    transform: translateX(0);
    background-color: ${WHITE};
    transition: background-color 0.4s, transform 0.4s;
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
`;

export const InputCheckbox = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  appearance: none;
  outline: none;

  & + ${SlideRaw} {
    background: ${BLACK}
    transition: background 0.2s;
  }

  &:checked + ${SlideRaw} {
    background: ${WHITE_70}
  }

  & + ${SlideRaw} {
    &:focus {
      background: ${RED_70};
    }

    &:hover {
      background: ${RED};
    }
  }

  &:checked + ${SlideRaw}::after {
    transform: translateX(27px);
    background-color: ${BLACK}
  }

  &:focus + ${SlideRaw} {
    box-shadow: 0 0 0 2px ${RED};
  }

  &:disabled {
    opacity: 0;

    & + ${SlideRaw} {
      cursor: not-allowed;
      opacity: 0.2;
    }
  }
`;

// TODO: Check accessability behavior with label as wrapper
export const HiddenSwitchLabel = styled.span`
  height: 0;
  width: 0;
  overflow: hidden;
  display: block;
`;
