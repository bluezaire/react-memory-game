import { useRef, useEffect } from 'react'
import RegularButton from './RegularButton'
import Select from './Select'

export default function Form({ handleSubmit, handleChange, isFirstRender }) {

        /**
     * For accessability, we need the following as seen below
     * useRef
     * userEffect
     * .focus()
     * tabIndex
     */
    const divRef = useRef(null)

    useEffect(() => {
        !isFirstRender && divRef.current.focus()
    }, [])
    
    return (
        <div className="form-container" ref={divRef} tabIndex={-1}>
            <p className="p--regular">
                Customize the game by selecting an emoji category and a number of memory cards.
            </p>
            <form className="wrapper">
                <Select handleChange={handleChange} />
            {/* 
            
                <div className="form__inner-wrapper">
                    <label htmlFor="category">Select an emoji category:</label>
                    <select
                    name="category" id="category" onClick={handleChange}>
                        <option value="animals-nature">animals-nature</option>
                        <option value="food-drink">food-drink</option>
                        <option value="people-body">people-body</option>
                        <option value="travel-places">travel-places</option>
                        <option value="flags">flags</option>
                        
                    </select>
                </div>
                <div className="form__inner-wrapper">
                    <label htmlFor="number">Select the number of cards:</label>
                    <select
                        name="number" id="number" onClick={handleChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        
                    </select>
                </div>
                */}
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div> 
    )
}