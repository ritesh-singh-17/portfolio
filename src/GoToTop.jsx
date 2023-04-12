import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    const [button, setButton] = useState(false);
    const listenToScroll = () => {
        if (window.scrollY > 300) {
            setButton(true);
        } else {
            setButton(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])
    return (
        <>
            { button ? 
            <div className="top-btn" onClick={goToBtn}>
                <FaArrowUp className="topBtnIcon" />
            </div>
            : null}
        </>
    )
}

export default GoToTop
