import React from 'react'

import { ColorScheme } from './types'

import { LogoSVG } from '../../logoSVG'

export const Logo = (props: { scheme: ColorScheme }) => {

  return <LogoSVG height="50px" width="20%" />
}

export default Logo
