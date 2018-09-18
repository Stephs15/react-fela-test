import React from 'react'
import Theme from 'Theme'
import Container from './containers/Container'
import Text from './components/Text'
import Input from './components/Input'
import Button from './components/Button/Button'
import Heading from './components/Heading'

export default () => (
  <Container>
    <div>Theme as a global defined env variable:</div>
    <h5>{process.env.THEME}</h5>
    <Text>This is the basic example with React.</Text>
    <Input />
    <Button name="primary">Im a test btn</Button>
    <Button name="secondary">Im a test btn</Button>
    <Heading as="h1" extend={Theme.theme.typography.h1}>Im an H1</Heading>
    <Heading as="h2" extend={Theme.theme.typography.h2}>Im an H2</Heading>
  </Container>
)
