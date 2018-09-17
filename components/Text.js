import { createComponent } from 'react-fela'

const info = (props) => ({
  fontSize: props.theme.fontSize,
  flexDirection: 'column'
})

export default createComponent(info)
