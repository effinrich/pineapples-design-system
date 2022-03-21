import React from 'react'
import 'react-native'
import { useColorMode, NativeBaseProvider } from 'native-base'
import {
  CssLayout,
} from '@divriots/dockit-react/mdx-layout-css'
import { Playground } from '@divriots/dockit-react/playground'
import { Showcases } from '@divriots/dockit-react/showcases'

import { customTheme } from '~/theme'
import { Logo } from '~/Logo'

import './icons.css'
import './layout.css'



export const Layout = props => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <NativeBaseProvider theme={customTheme}>
      <CssLayout
        components={{ Playground, Showcases }}
        onSwitch={colorMode}
        logo={
          <div style={{ width: '130px', height: '35px' }}>
            <Logo size='md'/>
          </div>
        }
        {...props}
      />
    </NativeBaseProvider>
  )
}
