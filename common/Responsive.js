import namedKeys from 'fela-plugin-named-keys'

const Responsive = namedKeys({
  phone: '@media (min-width: 375px)',
  bigPhone: '@media (min-width: 544px)',
  tablet: '@media (min-width: 768px)',
  bigTablet: '@media (min-width: 992px)',
  desktop: '@media (min-width: 1024px)',
  supportsFlex: '@supports (display: flex)',
  supportsGrid: '@supports (display: grid)'
})

export default Responsive;
