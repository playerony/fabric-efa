import {
  SMALL_SCREEN_BREAKPOINT,
  LARGE_SCREEN_BREAKPOINT,
  MEDIUM_SCREEN_BREAKPOINT,
  MOBILE_SCREEN_BREAKPOINT,
  XMOBILE_SCREEN_BREAKPOINT,
} from '@infrastructure';

export type DeviceBreakpoint = 'large' | 'medium' | 'small' | 'mobile' | 'xmobile';

export type DeviceBreakpointObject = Record<DeviceBreakpoint, number>;

export const deviceBreakpoint: DeviceBreakpointObject = {
  large: LARGE_SCREEN_BREAKPOINT,
  small: SMALL_SCREEN_BREAKPOINT,
  medium: MEDIUM_SCREEN_BREAKPOINT,
  mobile: MOBILE_SCREEN_BREAKPOINT,
  xmobile: XMOBILE_SCREEN_BREAKPOINT,
};
