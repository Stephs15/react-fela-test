import React from 'react'
import { render } from 'react-dom'
import { Provider, ThemeProvider } from 'react-fela'
import App from './app'
import createRenderer from './renderer'
import Theme from 'Theme'

const renderer = createRenderer()

render(
  <Provider renderer={renderer}>
    <ThemeProvider theme={Theme.theme}>
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById('app')
)
