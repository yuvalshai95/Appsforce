import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { MdOutlineClose } from 'react-icons/md'

// Actions
import { setUserMsg } from '../store/user/user.action.js';

export function UserMsg() {
    const dispatch = useDispatch();

    const userMsg = useSelector(state => state.userModule.userMsg);
    console.log('userMsg:', userMsg);

    const onCloseModal = () => {
        clearTimeout(timeoutId)
        dispatch(setUserMsg(null))
    }

    if (!userMsg?.txt) return null

    // Should we clean it in the return of the useEffect?
    // Is it okey to put it here and not inside a funtion or useEffect
    const timeoutId = setTimeout(() => {
        dispatch(setUserMsg(null))
    }, 2500);

    return (
        <section className={`user-msg ${userMsg.type}`}>
            <button className="primary-close-btn" onClick={() => {
                onCloseModal()
            }}><MdOutlineClose className='close-primary-icon' /></button>
            <p>{userMsg.txt}</p>
        </section>
    )

}