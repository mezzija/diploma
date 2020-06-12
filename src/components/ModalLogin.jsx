import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//style
import useStyles from '../styles/components/ModalLogin';
//action
import {addUser} from "../action";

const ModalLogin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const login = useSelector(store => store.user.login)

    const modal = useRef(null);
    const p = useRef(null)

    const handleClick = (event) => {
        event.preventDefault()
        if (event.target[0].value.length > 3) {
            dispatch(addUser(event.target[0].value));
            modal.current.classList.add(classes.disable);

        } else {
            p.current.classList.remove(classes.disable)
        }
    }
    useEffect(() => {
        if (login) {
            modal.current.classList.add(classes.disable);
        }
    }, [])

    return (
        <div ref={modal} className={classes.modalBg}>
            <div className={classes.cardLogin}>
                <p>Enter Login</p>
                <form onSubmit={handleClick} action="">
                    <input className={classes.input} type="text"/>
                    <p ref={p} className={classes.disable}>enter longer login</p>
                    <input className={classes.submit} type="submit" value="Continue"/>
                </form>
            </div>
        </div>
    )
}
export default ModalLogin;