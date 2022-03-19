export const colors = {
  primary: {
    light: '#E85B2D',
    dark: '#E85B2D',
    description: 'primary color for your app, usually your brand color'
  },
  accent: {
    light: '#2EA7FF',
    dark: '#76d8ff',
    description:
      'secondary color for your app which complements the primary color'
  },
  background: {
    light: '#f8f9fb',
    dark: '#262626',
    description: 'background color for pages, such as lists'
  },
  text: {
    light: '#262626',
    dark: '#CED4DA',
    description: 'text color for content'
  },
  disabled: {
    light: '#E9ECEF',
    dark: '#E9ECEF',
    description: 'color for disabled elements'
  },
  placeholder: {
    light: '#868E96',
    dark: '#868E96',
    description: 'color for placeholder text, such as input placeholder'
  },
  backdrop: {
    light: '#868E96',
    dark: '#FFFFFF80',
    description: 'color for backdrops of various components such as modals'
  },
  notification: {
    light: '#E85B2D',
    dark: '#E85B2D',
    description: 'background color for badges'
  },
  surface: {
    light: '#F8F9FA',
    dark: '#FFFFFF',
    description:
      'background color for elements containing content, such as cards'
  },
  onSurface: {
    light: '#rgba(0,0,0,0.7)',
    dark: '#rgba(0,0,0,0.7)',
    description: 'background color for snackbars'
  }
}

export const light = Object.keys(colors).reduce(
  (acc, c) => ({ ...acc, [c]: colors[c].light }),
  {}
)

export const dark = Object.keys(colors).reduce(
  (acc, c) => ({ ...acc, [c]: colors[c].dark }),
  {}
)

export const description = Object.keys(colors).reduce(
  (acc, c) => ({ ...acc, [c]: colors[c].description }),
  {}
)
