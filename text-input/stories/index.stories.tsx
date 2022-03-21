import React from 'react';;
import { TextInput } from '@effinrich/ui/text-input';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;

export const flat_text_input = () => <TextInput label="Email" />;

export const outlined_text_input = () => <TextInput mode="outlined" label="Email" />;