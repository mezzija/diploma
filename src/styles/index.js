import { createUseStyles } from 'react-jss';
import './fonts.css';

const RootStyle = ({ typography, palette }) => ({
  '@global': {
    '*, :after, :before': {
      boxSizing: ' border-box',
    },
    '*': {
      margin: '0',
      fontFamily: typography.fontFamily,
      fontWeight: typography.fontWeightBold,

    },
    html: {
      overflowY: 'hidden',
    },
    body: {
      fontSize: typography.fontSize,
      color: palette.text.primary,
    },
    a: {
      textDecoration: 'none',
      color: palette.text.primary,
    },
    input: {
      outline: '0',
    },

  },
});
export default createUseStyles(RootStyle, { name: 'Root', index: 100 });
