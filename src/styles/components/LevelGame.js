import {createUseStyles} from 'react-jss';

const LevelGameStyles=({palette})=>({
    levelGameCard:{
        fontSize:'1.2rem',
        display:'flex',
        flexDirection:'column',
        backgroundColor:palette.primary.main,
        marginLeft:'10px',
        width: '12rem',
        zIndex:'10',
        textAlign:'center',
        padding:'8px 0 8px 0',
        border:'2px solid #000000',
        cursor:'pointer',
        '& a':{
            fontSize: '1.5rem',
            marginBottom: '35px',
            textAlign: 'center',
        },
        '& p':{
            marginBottom:'20px',
        }
    }

})
export default createUseStyles(LevelGameStyles,{name:'LevelGame',index:301});