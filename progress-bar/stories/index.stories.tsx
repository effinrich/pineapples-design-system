import React from 'react';;
import { ProgressBar } from '@effinrich/ui/progress-bar';
import { storyLayout } from '@effinrich/ui/layout';

export default storyLayout;


export const progress_bar = () => <ProgressBar progress={0.5} style={{ width: '10rem' }} />;