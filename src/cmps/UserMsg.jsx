import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { MdOutlineClose } from 'react-icons/md'

// Actions
import { setUserMsg } from '../store/user/user.action.js';

export function UserMsg() {
    const dispatch = useDispatch();

    const userMsg = useSelector(state => state.userModule.userMsg);

    useEffect(() => {
        if (!userMsg) return
        const timeoutId = setTimeout(() => {
            dispatch(setUserMsg(null))
        }, 2000);
        return () => {
            clearTimeout(timeoutId)
        }
    }, [userMsg])

    const onCloseModal = () => {

        dispatch(setUserMsg(null))
    }

    if (!userMsg?.txt) return null

    return (
        <section className={`user-msg ${userMsg.type}`}>
            <button className="close-btn" onClick={() => {
                onCloseModal()
            }}><MdOutlineClose className='close-icon' /></button>
            <p>{userMsg.txt}</p>
        </section>
    )

}