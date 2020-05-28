import {createUseStyles} from 'react-jss';

const MainStyles=()=>({
    wrapper1:{
        height:'100%',
        padding:'10px',
        display:'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows:'1fr 1 fr',
        gridGap:'1em',

    },
    wrapper2:{
        height:'100%',
        padding:'10px',
        display:'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows:'repeat(3,1fr)',
        gridGap:'1em',
    },
    wrapper3:{
        height:'100%',
        padding:'10px',
        display:'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows:'repeat(3,1fr)',
        gridGap:'1em',
    },

})
export default createUseStyles(MainStyles,{name:'Main',index:303});
