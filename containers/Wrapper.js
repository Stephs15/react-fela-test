import { createComponent } from 'react-fela'

const center = props => ({
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  flex: props.flex || 1,
  fontFace: {
    fontFamily: props.theme.fontFamily
  },
  color: props.theme.fontColor,
  fontSize: props.theme.fontSize
})


export default createComponent(center);
