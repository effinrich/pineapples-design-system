import React from 'react'

import { LogoSVG } from '../src/index'
import { storyLayout } from '@effinrich/ui/layout'

export default storyLayout

export const logo_with_height_50 = () => <LogoSVG height="50px" width="20%" />

export const logo_with_height_100 = () => <LogoSVG height="100px" width="20%" />
