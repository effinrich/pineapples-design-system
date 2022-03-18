import React from 'react'

import { LogoSVG } from '../../LogoSVG'
import { ColorScheme } from './types'

export const Logo = (props: { scheme: ColorScheme }) => {
  const color = props.scheme === 'light' ? 'black' : 'white'

  return (
    <div style={{ height: 125 }}>
      <LogoSVG width="20%" />
    </div>
  )
}

export default Logo
