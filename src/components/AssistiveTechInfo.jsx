export default function AssistiveTechInfo({ emojisData, matchedCards}) {
    return (
        <section className="sr-only" area-live="polite" area-atomic="true">
            <h2>Game Status</h2>
            <p>Number of matched pairs:{matchedCards.length / 2}</p>
            <p>Number of cards left to match:{emojisData.length - matchedCards.length}</p>
        </section>
    )
}
    