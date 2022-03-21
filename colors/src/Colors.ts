import type { Leaves } from '../../types'

export interface IColorHues {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export const colors = {
  contrastThreshold: 7,
  // Singleton colors
  white: '#FFFFFF',
  black: '#000000',
  lightText: '#CED4DA',
  darkText: '#262626',
  disabled: '#E9ECEF',
  brand: {
    50: '#ffeae0',
    100: '#fcc7b6',
    200: '#f4a48a',
    300: '#ee815d',
    400: '#e85d30',
    500: '#cf4417',
    600: '#a23411',
    700: '#74250b',
    800: '#481503',
    900: '#1f0400'
  },
  accent: {
    50: '#daf6ff',
    100: '#ade0ff',
    200: '#7cc9ff',
    300: '#4ab4ff',
    400: '#1a9eff',
    500: '#0085e6',
    600: '#0067b4',
    700: '#004a82',
    800: '#002c51',
    900: '#001021'
  },
  gray: {
    50: '#e9f3fe',
    100: '#d1dae0',
    200: '#b9bfc7',
    300: '#9ea6ad',
    400: '#848c94',
    500: '#6b737b',
    600: '#525961',
    700: '#394046',
    800: '#21262d',
    900: '#020e17'
  },
  trueGray: {
    50: '#f0f2f4',
    100: '#d6d8da',
    200: '#bbbec2',
    300: '#9ea5ac',
    400: '#818b95',
    500: '#68727d',
    600: '#515860',
    700: '#3b3f44',
    800: '#232629',
    900: '#0b0d0f'
  },
  blueGray: {
    50: '#eff1f6',
    100: '#d1d5de',
    200: '#b2b9c9',
    300: '#929eb5',
    400: '#7382a2',
    500: '#596889',
    600: '#46516a',
    700: '#323a4b',
    800: '#1e232d',
    900: '#090c10'
  },
  red: {
    50: '#ffe5ef',
    100: '#f8bccb',
    200: '#ee92a8',
    300: '#e56785',
    400: '#dc3c63',
    500: '#c32349',
    600: '#981939',
    700: '#6e1029',
    800: '#440717',
    900: '#1e0007'
  },
  green: {
    50: '#e2fdea',
    100: '#bdf0cb',
    200: '#98e6ac',
    300: '#70da8b',
    400: '#49cf6b',
    500: '#30b651',
    600: '#238e3e',
    700: '#16652b',
    800: '#083e18',
    900: '#001602'
  },
  orange: {
    50: '#fff9da',
    100: '#ffecad',
    200: '#ffdf7d',
    300: '#ffd24b',
    400: '#ffc51a',
    500: '#e6ab00',
    600: '#b38500',
    700: '#805f00',
    800: '#4e3900',
    900: '#1d1300'
  },
  lightBlue: {
    50: '#dff6ff',
    100: '#b3e2ff',
    200: '#84cffc',
    300: '#57bcfb',
    400: '#34a8fa',
    500: '#258fe1',
    600: '#196faf',
    700: '#0d4f7e',
    800: '#00304d',
    900: '#00111e'
  },

  dark: {
    50: '#18181b',
    100: '#27272a',
    200: '#3f3f46',
    300: '#52525b',
    400: '#71717a',
    500: '#a1a1aa',
    600: '#d4d4d8',
    700: '#e4e4e7',
    800: '#f4f4f5',
    900: '#fafafa'
  },
  // Derived colors
  background: {} as IColorHues,
  backdrop: {} as IColorHues,
  danger: {} as IColorHues,
  error: {} as IColorHues,
  success: {} as IColorHues,
  warning: {} as IColorHues,
  muted: {} as IColorHues,
  primary: {} as IColorHues,
  info: {} as IColorHues,
  secondary: {} as IColorHues,
  light: {} as IColorHues,
  tertiary: {} as IColorHues
}

colors.background = colors.blueGray
colors.backdrop = colors.gray
colors.danger = colors.red
colors.error = colors.red
colors.success = colors.green
colors.warning = colors.orange
colors.muted = colors.trueGray
colors.primary = colors.brand
colors.secondary = colors.accent
colors.tertiary = colors.green
colors.info = colors.lightBlue
colors.light = colors.trueGray

export default colors
// export type IColors = Leaves<ITheme['colors']>;
export type IColors = Leaves<typeof colors>
