import React, { Component } from 'react';

/*
Just an idea on how to use svg icons as a Component
where you just have to pass the name

Currently the icon is not being rendered, idk why :(
*/
const req = require.context('../assets/icons', false, /^\.\/.*\.svg$/);
const GLYPHS = (req.keys()).reduce((glyphs, key) => {
  const filename = key.match(new RegExp(/[^/]+(?=\.svg$)/))[0];
  console.log('key', req(key))
  return Object.assign({}, glyphs, { [filename]: req(key) });
}, {});
const DEFAULT_CLASS = 'ji-svg';

// const Icon = ({ name = '', style = {}, className = '' }) => {
//   const svgClasses = `${DEFAULT_CLASS} ${className}`;
//   console.log('NAME', name, GLYPHS[name])
//   return (
//     <svg className={svgClasses} style={style}>
//       <use xlinkHref={GLYPHS[name]} />
//     </svg>
//   );
// };

class Icon extends Component {
  constructor(props, context) {
    super(props, context)
    this.name = 'delete'
    this.style = {}
    this.className = ''
  }

  render() {
    const svgClasses = `${DEFAULT_CLASS} ${this.className}`;
    console.log(this, GLYPHS[this.name].default);
    return (
      <svg className={svgClasses} style={this.style}>
        <use xlinkHref={GLYPHS[this.name]} />
      </svg>
    );
  }
}

export default Icon;
