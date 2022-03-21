import React from 'react';
import { NativeBaseProvider, View } from 'native-base'

import {customTheme} from '~/theme'

import './icons.css'

export const storyLayout = {
  decorators: [
    Story => (
      <View style={{ padding: '1rem' }}>
        <NativeBaseProvider theme={customTheme}>
          <Story />
        </NativeBaseProvider>
      </View>
    )
  ],
  parameters: {
    layout: 'centered'
  }
}