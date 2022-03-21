import React from 'react'
import { Box } from 'native-base'

import ColorComponent from './ColorComponent'
import colors from './Colors'

export const ColorsBlock = ({}) => (
  <Box>
    {Object.keys(colors).map((key, index) => (
      <ColorComponent
        variants={colors[key]}
        name={key}
        key={`space-block-${key}-${index}`}
      />
    ))}
  </Box>
)

export default ColorsBlock
