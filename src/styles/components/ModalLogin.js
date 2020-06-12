import {createUseStyles} from 'react-jss';

const modalLoginStyle=({palette})=>({
    modalBg:{

        position: 'fixed',
        top:'0',
        bottom:'0',
        left:'0',
        right:'0',
        backgroundColor:'rgba(0,0,0,0.5)',
        zIndex:'100',

    },
    cardLogin:{
        backgroundColor: palette.primary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding:'20px 50px',
        border:'2px solid #ffffff',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        /*'& input':{
            border: '2px solid #000000',
            width:'200px',
            height:'30px',
            fontSize:'1.5rem',
        },*/
        '& a':{
            border: '2px solid #000000',
            borderRadius: '5px',
            marginTop:'10px',
            padding: '10px',
            color: '#fff',
            backgroundColor:'#000'
        },
        '& p':{
            marginBottom: '10px',
            fontSize: '1.5rem',
        },
        '& form':{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            '& p ':{
                fontSize:'0.8rem',
                color: 'red',
            }
        }
    },
    input:{
        border: '2px solid #000000',
        width:'200px',
        height:'30px',
        fontSize:'1.5rem',
    },
    submit:{
        border: '2px solid #000000',
        borderRadius: '5px',
        marginTop:'10px',
        padding: '10px',
        color: '#fff',
        cursor:'pointer',
        backgroundColor:'#000',
        '&:active':{
            color:palette.primary.main,
            margin:'0',
            marginTop: '10px',
        }
    },
    disable:{
        display: 'none',
    }


});
export default createUseStyles(modalLoginStyle,{name:'modalLogin',index:1});