import { createComponent, connect } from 'react-fela'


const basicStyles = props => ({
  padding: props.theme.padding || 20,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  flex: props.flex || 1,
  fontFace: props.theme.fontFace,
  color: props.theme.fontColor
})

export default createComponent(basicStyles)
