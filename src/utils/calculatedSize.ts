import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const DEFAULT_SCREEN_HEIGHT = 812;
const DEFAULT_SCREEN_WIDTH = 375;

export function hp(px: number) {
  const value = (px * 100) / DEFAULT_SCREEN_HEIGHT;
  return Math.floor(heightPercentageToDP(value));
}

export function wp(px: number) {
  const value = (px * 100) / DEFAULT_SCREEN_WIDTH;
  return Math.floor(widthPercentageToDP(value));
}
