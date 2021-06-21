import { css } from 'styled-components';

import { deviceBreakpoint } from '../..';
import { MediaFor, CSSParams } from './respond-to.type';

const keys = Object.keys(deviceBreakpoint) as Array<keyof typeof deviceBreakpoint>;

const respondToDecorator = (mediaFor: MediaFor) =>
  keys.reduce((accumulator, label) => {
    accumulator[label] = (...args: CSSParams) => css`
      @media (${mediaFor}: ${deviceBreakpoint[label]}px) {
        ${css(...args)};
      }
    `;

    return accumulator;
  }, {} as Record<keyof typeof deviceBreakpoint, Function>);

export const respondToMin = respondToDecorator('min-width');

export const respondToMax = respondToDecorator('max-width');
