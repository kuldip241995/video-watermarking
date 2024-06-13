import {StyleSheet} from 'react-native';
import {isWebPlatform} from '../../utils/CommonUtils';

export const mobileFonts = StyleSheet.create({
  FONT_900: {
    fontFamily: 'Raleway-Black',
  },
  FONT_800: {
    fontFamily: 'Raleway-ExtraBold',
  },
  FONT_700: {
    fontFamily: 'Raleway-Bold',
  },
  FONT_600: {
    fontFamily: 'Raleway-SemiBold',
  },
  FONT_500: {
    fontFamily: 'Raleway-Regular',
  },
  FONT_400: {
    fontFamily: 'Raleway-Medium',
  },
  FONT_300: {
    fontFamily: 'Raleway-Light',
  },
  FONT_200: {
    fontFamily: 'Raleway-ExtraLight',
  },
  FONT_100: {
    fontFamily: 'Raleway-Thin',
  },
});

export const webFonts = StyleSheet.create({
  FONT_900: {
    fontFamily: 'Raleway',
    fontWeight: '900',
  },
  FONT_800: {
    fontFamily: 'Raleway',
    fontWeight: '800',
  },
  FONT_700: {
    fontFamily: 'Raleway',
    fontWeight: '700',
  },
  FONT_600: {
    fontFamily: 'Raleway',
    fontWeight: '600',
  },
  FONT_500: {
    fontFamily: 'Raleway',
    fontWeight: '500',
  },
  FONT_400: {
    fontFamily: 'Raleway',
    fontWeight: '400',
  },
  FONT_300: {
    fontFamily: 'Raleway',
    fontWeight: '300',
  },
  FONT_200: {
    fontFamily: 'Raleway',
    fontWeight: '200',
  },
  FONT_100: {
    fontFamily: 'Raleway',
    fontWeight: '100',
  },
});

const fonts = isWebPlatform() ? webFonts : mobileFonts;

export default fonts;
