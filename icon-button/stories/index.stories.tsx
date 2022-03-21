import React from 'react';;
import { IconButton } from '@effinrich/ui/icon-button';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

export const icon_button = () => <IconButton
  icon="camera"
  size={20}
  onPress={() => console.log('Pressed')}
/>;