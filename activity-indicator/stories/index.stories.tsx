import React from 'react'
import { ActivityIndicator } from '@effinrich/ui/activity-indicator'
import { storyLayout } from '@effinrich/ui/layout'

export default storyLayout

export const animated = () => <ActivityIndicator animating />

export const still = () => <ActivityIndicator animating={false} />

export const small = () => <ActivityIndicator size="small" />

export const large = () => <ActivityIndicator size="large" />

export const size_64 = () => <ActivityIndicator size={64} />
