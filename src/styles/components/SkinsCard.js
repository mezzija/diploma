import {createUseStyles} from 'react-jss';

const SkinsCardStyle=({palette})=>({
    skinCardStyle:{
        fontSize:'1.2rem',
        display:'flex',
        flexDirection:'column',
        backgroundColor:palette.primary.main,
        width: '12rem',
        zIndex:'10',
        textAlign:'center',
        padding:'8px 0 8px 0',
        border:'2px solid #000000',
        '& img':{
            width: '60px',
            height:'60px',
            //display: 'none',
        },
        '& p':{
            marginBottom:'20px',
        }
    },

})
export default createUseStyles(SkinsCardStyle,{name:'SkinsCard',index:300});