import React from 'react'
import { createComponent } from 'react-fela'
// import PropTypes from 'prop-types';

// Here we declare fela styles
const headingStyle = props => ({
  
})

// Create component and pass styles, tag and properties that should be pass down to children
const HeadingComponent = createComponent(headingStyle)

/**
 * The only true button.
 * Note: This component uses react-fela createComponent api to render styles for demo.
 */
export default function Heading(props) {
  const { children, ...passDownProps } = props
  return <HeadingComponent {...passDownProps}>{children}</HeadingComponent>
}