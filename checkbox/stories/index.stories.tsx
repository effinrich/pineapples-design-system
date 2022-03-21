import React from 'react';;
import { Checkbox } from '@effinrich/ui/checkbox';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

const CheckboxShowcase = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => setChecked(!checked)}
    />
  );
};

export const checkbox = () => <CheckboxShowcase />;