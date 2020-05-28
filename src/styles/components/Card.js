import {createUseStyles} from 'react-jss';

const CardStyle =({palette})=>({
    cardStyle:{
        backgroundColor:palette.primary.main,
    },
    image:{
        width:'100%',
        height:'100%',
    }
});
export default createUseStyles(CardStyle,{name:'Card',index:400});