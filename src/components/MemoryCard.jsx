import EmojiButton from './EmojiButton'

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards}) {
    //console.log(data);
    //const emojiArray = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵']

    var x = Math.floor(Math.sqrt(data.length)) 
    var y= parseInt(data.length/x)
    console.log("Grid should be:" + x + ":"+y)


    const emojiEl = data.map((emoji, index) => {
        var endRow = index % x === 0 && index > 0;
        console.log("index:"+index+" endRow:"+endRow)

        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index)

        let cardStyle = "card-item"
        if (selectedCardEntry){
            cardStyle = cardStyle + " card-item--selected"
        } else if (matchedCardEntry) {
            cardStyle = cardStyle + " card-item--matched"
        }
/*
Nested ternery operator versus if/else if.

        const cardStyle = 
            matchedCardEntry ? "card-item--matched" :
            selectedCardEntry ? "card-item--selected" :
            ""

If we use this logic, then we have to add card-item to the className since it's not in cardStyle:
    <li key={index} className={`card-item {cardStyle}`}>
*/

        //console.log(selectedCardEntry);
        return (
            <>
            {/**
             * this was an attempt to force the list into a grid
             * I think we can do this with styling, just not sure how to dynamically control it.
             * https://elad.medium.com/the-css-grid-methods-e75ce54d1da2
            endRow && (<br />)*/}   
            <li key={index} className={cardStyle}>
                <EmojiButton
                    index={index}
                    emoji={emoji}
                    handleClick={() => handleClick(emoji.slug, index)}
                    selectedCardEntry={selectedCardEntry} 
                    matchedCardEntry={matchedCardEntry}
                />
            </li> 
 
            </>  
        )            
    });
    
    return <ul className="card-container">{emojiEl}</ul>
}