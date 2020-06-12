import {createUseStyles} from 'react-jss';

const CardStyle =({palette})=>({
    flipCard:{

        perspective: '1000px',
        '& img ':{
          maxWidth: '100%',
          maxHeight: '100%',
        },

    },
    flipCardInner:{
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        cursor:'pointer',
        backgroundColor: '#1d1d1b',

    },
    flipCardFront:{
        backgroundColor: '#1d1d1b',
        position: 'absolute',
        width: '100%',
        height: '100%',
        webkitBackfaceVisibility:' hidden',
        backfaceVisibility: 'hidden',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',

    },
    flipCardBack:{
        backgroundColor: '#1d1d1b',
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',

    },
    active:{
        transform:' rotateY(180deg)',
    },

    disable:{

        animation:'$disable 0.9s linear',
        animationFillMode: 'forwards',


    },
    '@keyframes disable':{
        '0%': {opacity:'1'},
        '30%':{opacity:'0.7'},
        '50%':{opacity:'0.5'},
        '70%':{opacity:'0.3'},
        '90%': {opacity:'0',width:'100%',height:'100%'},
        '100%':{width:0,height:0,opacity:'0'},

    },



});
export default createUseStyles(CardStyle,{name:'Card',index:400});