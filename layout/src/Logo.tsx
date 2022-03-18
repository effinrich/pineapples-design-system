import React from 'react'

import { ColorScheme } from './types'

import { LogoSVG } from '../../logoSVG'

export const Logo = (props: { scheme: ColorScheme }) => {
  const color = props.scheme === 'light' ? 'black' : 'white'

  return (
    <div style={{ height: 50 }}>
      <LogoSVG width="20%" />
    </div>
  )
}

export default Logo
