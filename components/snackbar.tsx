import { Html, Head, Main, NextScript } from 'next/document'
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

export default function Snackbar({ title, message, messageType, timer }: { title: any; message: any; messageType: any; timer: any }) {
    const [closeTimeout, setCloseTimeout] = useState(null);

    useEffect(() => {
        beginCloseTimeout();
    }, []);

    const closeSnackBar = () => {
        clearTimeout(closeTimeout);
        ReactDOM.unmountComponentAtNode(document.getElementById('snackbar-fixed-container'));
    }

    const beginCloseTimeout = () => {
        if (timer) {
            const timeout = setTimeout(() => closeSnackBar(), timer);
            setCloseTimeout(timeout);
        }
    }
  return (
    <>
            <div 
                className="-m-2 fixed bottom-3 left-3 z-30"
                onMouseEnter={() => clearTimeout(closeTimeout)}
                onMouseLeave={() => beginCloseTimeout()}
            >
                <div className="p-2">
                    <div className="flex items-center bg-white leading-none text-pink-600 rounded-full p-2 border shadow-xl text-teal text-sm">
                        <span className="flex items-center bg-pink-600 text-white text-xs rounded-full px-3 py-2 ">
                            {title}
                        </span>
                        <span className="inline-flex2 px-2 text-xs">
                            {message}
                        </span>
                    </div>
                </div>
            </div>
        </>
  )
}
