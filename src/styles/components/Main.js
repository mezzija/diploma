import { createUseStyles } from 'react-jss';

const MainStyles = () => ({
  easy: {
    height: '100%',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2,1fr)',
    gridGap: '1em',

  },
  medium: {
    height: '100%',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(3,1fr)',
    gridGap: '1em',
  },
  hard: {
    height: '100%',
    padding: '30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(3,1fr)',
    gridGap: '1em',
  },

});
export default createUseStyles(MainStyles, { name: 'Main', index: 303 });
