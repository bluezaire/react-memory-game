import { decodeEntity } from 'html-entities'

export default function EmojiButton({ 
    index,
    emoji,
    handleClick, 
    selectedCardEntry, 
    matchedCardEntry, 
}) {
    
    const btnContent = selectedCardEntry || matchedCardEntry ? decodeEntity(emoji.character): "?"

    const btnStyle =
        matchedCardEntry ? "btn--emoji__back--matched" :
        selectedCardEntry ? "btn--emoji__back--selected" :
        "btn--emoji__front"
    
    const isDisabled = matchedCardEntry ? "disabled" : ""

    const ariaDescription = emoji.unicodeName.replace(/[A-Z]\d{1,2}[.]\d/g,"");    
    const btnAria = 
        matchedCardEntry ? ariaDescription + " Matched." :
        selectedCardEntry ? ariaDescription + " Selected." :
        "Card upside down."

/*
    For details on aria-label and aria-live, see the following:
        https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
        https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
*/
    return (
        <button
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry? null: handleClick}
            disabled={isDisabled}
            aria-label={`Position ${index+1}: ${btnAria}`}
            area-live="polite"
        >
            {btnContent}
        </button>
    )
} 