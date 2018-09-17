import React, { Component } from 'react'
import { createComponent } from 'react-fela'
import Label from './Label'
import Wrapper from '../containers/Wrapper'
import Text from './Text'

const title = props => ({
  fontSize: props.theme.fontSize,
  color: props.theme.fontColor
});

const Title = createComponent(title, 'h1');

export default class Input extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { size: 50 }
    this.setSize = this.setSize.bind(this)
  }

  setSize(e) {
    this.setState({ size: e.target.value })
  }

  render() {
    return (
      <Wrapper flex="0 1 auto">
        <Title>I am a title</Title>
        <br />
        <Text>Change the input to experience dynamic styling.</Text>
        <input type="number" onInput={this.setSize} defaultValue={this.state.size} />
        <Label size={this.state.size}>
          {this.state.size}
        </Label>
      </Wrapper>
    )
  }
}
