import {createUseStyles} from 'react-jss';


const startWindowStyle=({palette})=>({
    startWindow:{
        color:'#ffffff',
        fontSize:'1.5rem',
        flexDirection:'column',
        backgroundColor:'#171714',
        height:'100%',
        padding: '0 50px'
    },
    startLogo:{
        display:'flex',
        justifyContent:'center',
        '& img':{
            width:'250px',
        },
    },
    description:{
        '& p':{
            fontSize: '1rem',
        },
        marginLeft:'20px',
        paddingTop:'10px',


    }

});

export default createUseStyles(startWindowStyle,{name:"StartWindow",index:304});