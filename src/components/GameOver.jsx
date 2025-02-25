import { useRef, useEffect } from 'react'
import RegularButton from './RegularButton'

export default function GameOver({handleClick}){

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
            <p className="p--large">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
                Play Again
            </RegularButton>
        </div>
    )
}