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
        //textAlign: 'center',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        cursor:'pointer',
        backgroundColor: '#ffffff',
    },
    flipCardFront:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    flipCardBack:{
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
        display:'none',
    }


});
export default createUseStyles(CardStyle,{name:'Card',index:400});