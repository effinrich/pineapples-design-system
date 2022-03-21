import React from 'react';;
import { Chip } from '@effinrich/ui/chip';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

export const flat = () => (
  <Chip icon="information" onPress={() => console.log('Pressed')}>
    Example Chip
  </Chip>
);

export const outlined = () => (
  <Chip mode="outlined" icon="information" onPress={() => console.log('Pressed')}>
    Example Chip
  </Chip>
);