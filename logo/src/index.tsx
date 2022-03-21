import React from 'react'
import { Image } from 'native-base'
import { Image as RnImage } from 'react-native'

const imageAssetSource = RnImage.resolveAssetSource(
 {uri: '../../assets/Vatom_Logo-2xl.png'}
)

export interface ImageProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Logo = ({ size = 'sm', ...props }: ImageProps) => <Image source={imageAssetSource} size={size} {...props} />

export default Logo
