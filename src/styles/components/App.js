import { createUseStyles } from 'react-jss';

const AppStyles = ({ palette }) => ({
  mainSize: {
    backgroundColor: palette.background.main,
    height: 'calc(100vh - 100px);',
    display: 'block',
    margin: '60px 50px 40px 50px',
    boxShadow: '0 0 17px 5px rgba(0,0,0,0.5)',

  },
  row: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '5px',
  },
  positionSettings: {
    display: 'flex',
    position: 'relative',
    left: '3%',

  },
  positionButton: {
    position: 'relative',
    right: '3%',
  },
});

export default createUseStyles(AppStyles, { name: 'App', index: 200 });
