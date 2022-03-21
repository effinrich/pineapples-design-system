import React from 'react';

import { View } from 'react-native';
import { Appbar } from '@effinrich/ui/appbar';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

export const appbar = () => (
  <View style={{ width: '25rem' }}>
    <Appbar >
      <Appbar.Action
        icon="archive"
        onPress={() => console.log('Pressed archive')}
      />
      <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
      <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
      <Appbar.Action
        icon="delete"
        onPress={() => console.log('Pressed delete')}
      />
    </Appbar>
  </View>
);