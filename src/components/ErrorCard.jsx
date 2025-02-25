import { useRef, useEffect } from 'react'
import RegularButton from './RegularButton'

export default function ErrorCard({resetErrorClick}){
    /**
     * For accessability, we need the following as seen below
     * useRef
     * userEffect
     * .focus()
     * tabIndex
     */
    const divRef = useRef(null)

    useEffect(() => {
        divRef.current.focus()
    }, [])

    return (
        <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
            <p className="p--large">Sorry, there was an error.</p>
            <p className="=--regular">Please come back later or click the button below to try restarting the game.</p>
            <RegularButton handleClick={resetErrorClick}>
                Play Again
            </RegularButton>
        </div>
    )
}