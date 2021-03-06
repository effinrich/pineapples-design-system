import React from 'react';;
import { Switch } from '@effinrich/ui/switch';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

const SwitchShowcase = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export const switch_component = () => <SwitchShowcase />;