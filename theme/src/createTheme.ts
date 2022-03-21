import 'react-native'
import { DefaultTheme, configureFonts } from 'react-native-paper'
import { fontConfig } from '~/fonts'
import { colors } from '~/colors'
import { roundness } from '~/roundness'
import { animation } from '~/animation'

export const createTheme = (colorMode: 'light' | 'dark' = 'light') => ({
  ...DefaultTheme,
  dark: colorMode === 'dark',
  roundness,
  colors: colorMode === 'light' ? colors.light : colors.dark,
  fonts: configureFonts(fontConfig),
  animation
})
