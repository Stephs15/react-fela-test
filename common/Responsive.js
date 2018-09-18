import namedKeys from 'fela-plugin-named-keys'

/*
DEFINE MEDIA QUERIES
Here we name the media queries so they are easier to use
and we have a more clean code in the components

QUESTIONS
- Maybe we can think on inputs types, support instead of screen size
*/
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
