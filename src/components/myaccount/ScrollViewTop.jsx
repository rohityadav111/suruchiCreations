import React from 'react'
import { useLocation } from 'react-router'
import { useLayoutEffect } from 'react'

const ScrollViewTop = ({ children }) => {

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children

}

export default ScrollViewTop