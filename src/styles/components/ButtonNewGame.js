import {createUseStyles} from 'react-jss';
const ButtonNewGameStyle=({palette})=>({
    buttonNewGameStyle:{
        fontSize:'1.2rem',
        backgroundColor:palette.primary.main,
        width: '12rem',
        zIndex:'10',
        textAlign:'center',
        padding:'8px 0 8px 0',
        border:'2px solid #000000',
        cursor:'pointer',
    }
});
export default createUseStyles(ButtonNewGameStyle,{name:'ButtonNewGame',index:302});