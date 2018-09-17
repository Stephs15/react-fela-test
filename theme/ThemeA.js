const baseColors = {
  priBase: '#0F7272',
  priLight: '#128F8F',
  priDark: '#0C5555',
  priSubtle: '#EEF5F5',
  secBase: '#FB3304',
  secLight: '#F37355',
  secDark: '#CD2D08',
  secSubtle: '#FEF0ED',
  terBase: '#E69912',
  terLight: '#EFA729',
  terDark: '#C88510',
  terSubtle: '#FDF7EE',
  tropaz: '#2B5EA2',
  chill: '#128F8F',
  pomegranate: '#FC4B22',
  buttercup: '#EFA729',
  candlelight: '#FADB09',
  white: '#FFFFFF',
  fog: '#F9F9F9',
  ash: '#DFDFDF',
  silver: '#C8C8C8',
  steel: '#898989',
  charcoal: '#555D5D',
  lead: '#333737',
  boulder: '#7A7A7A',
  crown: '#E7CB69',
  purple: '#AB5CEB',
  malibu: '#54BDF8'
};

const propertyColors = {
  border: baseColors.steel,
  focus: baseColors.lead,
  error: baseColors.pomegranate,
  success: baseColors.chill,
  warning: baseColors.buttercup,
  highlight: baseColors.candlelight,
  disabled: baseColors.boulder
}

const ThemeA = {
  baseColors,
  propertyColors,
  theme: {
    padding: 50,
    fontColor: '#333737',
    fontSize: '14px',
    lineHeight: '20px',
    borderRadius: 5,
    fontFace: {
      fontFamily: 'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;'
    },
    button: {
      primary: {
        background: 'linear-gradient(90deg, #0F7272 0%, #128F8F 100%)',
        color: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: baseColors.priBase
      },
      secondary: {
        background: 'linear-gradient(270deg, #F37355 0%, #FB3304 100%)',
        color: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: baseColors.secBase
      }
    },
    typography: {
      h1: {
        fontSize: '32px',
        lineHeight: '36px',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '28px',
        lineHeight: '32px',
        fontWeight: 'bold'
      }
    }
  }
};

export default ThemeA;
