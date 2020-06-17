import { createUseStyles } from 'react-jss';

const TimerStyle = ({ palette }) => ({
  timerStyle: {
    fontSize: '1.3em',
    backgroundColor: palette.primary.main,
    padding: '10px',
    border: '2px solid #000000',
    borderRadius: '10px',

  },
});
export default createUseStyles(TimerStyle);
