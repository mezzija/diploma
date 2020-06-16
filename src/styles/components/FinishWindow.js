import {createUseStyles} from 'react-jss';

const finishWindowStyle=({palette})=>({
    result:{
        display:'flex',
        justifyContent:'center',
        color:'#ffffff',
        fontSize:'4rem',
        alignItems:'center',
        height:'100%',
        flexDirection:'column',
    },
    text:{
        fontSize: '6rem',
        paddingBottom: '30px',
    }
});
export default createUseStyles(finishWindowStyle,{name:'FinishWindow',index:500});