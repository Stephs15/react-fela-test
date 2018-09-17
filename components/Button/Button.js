import React, { Component } from 'react'
import { createComponent } from 'react-fela'
import PropTypes from 'prop-types';

// Define keyframe to render on the rules
const keyframe = () => ({
  '0%': { color: '#D3B7F7' },
  '50%': { color: '#50514f' },
  '100%': { color: 'white' }
})

// Here we declare fela styles
// We have basic styles that apply for every button
// And we also have themed properties
const btnStyle = (props, renderer) => ({
  ...props.theme.button[props.name], // Pass styles as a set of rules
  borderRadius: props.theme.borderRadius, // Use an specific value from the theme
  textAlign: 'center',
  padding: '5px 10px',
  height: '56px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  userSelect: 'none',
  bigPhone: { // Handle media queries related styles
    height: '46px',
    fontSize: '14px'
  },
  transition: 'border 0.5s ease-out',
  transitionDelay: '.8s',
  ':hover': {
    animationName: renderer.renderKeyframe(keyframe), // Render an animation
    transitionDelay: '.5s',
    animationDuration: '2s',
    animationIterationCount: 'ease'
  },
  animationDuration: '2s',
  animationIterationCount: 'infinite'
})

// Create component and pass styles, tag and properties that should be pass down to children
const ButtonComponent = createComponent(btnStyle, 'button', [
  'clicked',
  'onClick',
])

// Create Button component
// I was trying
class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  // Trying to animate on click, don't know if is the best way
  onEventClick = (e) => {
    if (!this.state.clicked) {
      // e.currentTarget.style.background = 'red';
      // e.currentTarget.style.animationDuration = '1s';
      this.setState(state => ({ clicked: !state.clicked }))
    }
  }

  render() {
    const { children, onClick, ...passDownProps } = this.props;
    return (
      <ButtonComponent onClick={this.onEventClick} {...passDownProps}>{children}</ButtonComponent>
    )
  }
}


Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  name: 'primary',
  /* eslint-disable no-console */
  onClick: (event) => {
    console.log('You have clicked me!', event.target)
  }
  /* eslint-enable no-console */
}

export default Button;
