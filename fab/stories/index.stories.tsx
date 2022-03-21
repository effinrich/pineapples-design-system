import React from 'react';;
import { FAB } from '@effinrich/ui/fab';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

export const fab = () => (
  <FAB
    style={{
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    }}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
);