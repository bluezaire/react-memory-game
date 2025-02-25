import { fireEvent } from '@testing-library/dom';
import { useState, useEffect } from 'react'
import Form from './components/Form'
import MemoryCard from './components/MemoryCard'
import AssistiveTechInfo from './components/AssistiveTechInfo'
import GameOver from './components/GameOver'
import ErrorCard from './components/ErrorCard'

/*
    zscaler wasn't allowing me to call the Emoji API used in the demo, so I found a different one
    This will cause the mapping to be slightly different.  The details for the new API can be 
    found here:
        https://emoji-api.com/
*/
const BASE_URL = "https://emoji-api.com";
const API_KEY = "access_key=e27436ecb6d79e13539262a80e15506903d41699";

export default function App() {
    const initialFormData = {category: "animals-nature", number:10}

    const [isFirstRender, setIsFirstRender] = useState(true);
    const [formData, setFormData] = useState(initialFormData)
    console.log(`formData: ${formData.category} : ${formData.number}`)
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setemojisData] = useState([])
    //console.log(emojisData)
    const [selectedCards, setSelectedCards] = useState([])
    //console.log(selectedCards)
    const [matchedCards, setMatchedCards] = useState([])
    const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
    //console.log("areAllCardsMatched:"+areAllCardsMatched)
    const [isError, setIsError] = useState(false)
    console.log("isError:"+isError)
    
    useEffect(() => {
        console.log("selectedCards:"+selectedCards.length)
        if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])
        }
    }, [selectedCards])
    
    useEffect(() => {
        console.log("matchedCards:"+matchedCards.length)
        if (emojisData.length && matchedCards.length === emojisData.length) {
            setAreAllCardsMatched(true)
        }
    }, [matchedCards])    


    async function startGame(e) {
        e.preventDefault()
        try {
            //throw new Error("Start Game wtih an error!")

            const response = await fetch(`${BASE_URL}/categories/${formData.category}?${API_KEY}`,{
                method: "GET",
            })
            //console.log("response ok?"+response.ok)
            if(!response.ok){
                throw new Error("Could not fetch data from API")
            }
            const data = (await response.json())
            //console.log(data)
            //const dataSample = data.slice(0,5)
            const dataSlice = getRandomElements(data)
            const pairedEjojisArray = getEmojiArray(dataSlice)
            setemojisData(pairedEjojisArray)
            

            setIsGameOn(true)
        } catch(error) {
            console.log(error)
            setIsError(true)
        } finally {
            setIsFirstRender(false)
        }
        
    }

    function resetGame(e){
        //console.log("resetGame")
        setIsGameOn(false)
        setAreAllCardsMatched(false)
        setSelectedCards([])
        setMatchedCards([])
        //startGame(e)
    }

    function getRandomElements(array){
        const randomIndices = [];
        //const randomIndicesArray = [];
        while(randomIndices.length < (formData.number/2) ){
            let randomIndex = Math.floor(Math.random() * array.length);
            if(!randomIndices.includes(randomIndex) ){
                randomIndices.push(randomIndex);
                //console.log("randomIndex "+randomIndex+" added to indexArray");
            } else {
                //console.log("randomIndex "+randomIndex+" already in indexArray");
            }
        }
        //console.log(randomIndices);

        const randomIndicesArray = randomIndices.map(index => array[index]);
        /*
        This is what the presentation shows in the code despite the fact that the demonstration has the above.  
        This is yet anoher way to do the same thing to build the new randomIndicesArray data
        */
        /*
        const randomIndicesArray = randomIndices.reduce((reduceArray, index) => {
            reduceArray.push(array[index])
            return reduceArray
        },[])
        */
        /*  
        This while loop was what I built, but the above accomplishes the same without the loop.
        */
       /*
        let i = 0;
        while(i < randomIndices.length) {
            let index = randomIndices[i];
            randomIndicesArray.push(array[index]);
            i++;
        }
        */
        //console.log(randomIndicesArray)
        return randomIndicesArray;

    }
    
    function getEmojiArray(data){
        // const dataCopy = [...data];
        // const pairedEmojisArray = dataCopy.concat(data);
        const pairedEmojisArray = [...data, ...data];
        //console.log(pairedEmojisArray);

        /*
        Fischer Yates Shuffle can be used to shuffle the array.
        https://medium.com/@omar.rashid2/fisher-yates-shuffle-a2aa15578d2f
        */
        let oldElement, rand;
        for(let i = pairedEmojisArray.length - 1; i > 0; i--) {
            rand = Math.floor(Math.random()*(i+1));
            oldElement = pairedEmojisArray[i];
            pairedEmojisArray[i] = pairedEmojisArray[rand];
            pairedEmojisArray[rand] = oldElement;
        }
        return pairedEmojisArray;

    }    
    
    function turnCard(name, index) {
        //console.log(`The emoji ${name} at index ${index} was clicked!`)
        /*
            Due to the differences between the 2 API's, we will mapp slug into the name field to keep this function 
            consistent with the exercise.

            character: "🦨"
            codePoint: "1F9A8"
            group: "animals-nature"
            slug: "e12-0-skunk"
            subGroup: "animal-mammal"
            unicodeName: "E12.0 skunk"
        */
        //const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)
        
        //if (!selectedCardEntry && selectedCards.length < 2) {
        if (selectedCards.length < 2) {
            // In this case, we can add more entries
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, { name, index }])
        //} else if (!selectedCardEntry && selectedCards.length === 2) {
        } else if (selectedCards.length === 2) {
            // In this case, we need to initialize our entry with one value
            setSelectedCards([{ name, index }])
        }        
    }

    function resetError(){
        setIsError(false)
    }

    function handleFormChange(e){
        //const newFormData = formData
        //newFormData[e.target.name] = e.target.value
        //setFormData(newFormData);

        setFormData(prevFormData => ({
            ...prevFormData, [e.target.name]: [e.target.value]
        }))
    }
    
    return (
        <main>
            <h1>Memory</h1>
            {!isGameOn && !isError && <Form 
                handleSubmit={startGame} 
                handleChange={handleFormChange} 
                isFirstRender={isFirstRender} />}
            {isGameOn && !areAllCardsMatched && <AssistiveTechInfo 
                emojisData={emojisData}
                matchedCards={matchedCards} /> }
            {areAllCardsMatched && <GameOver handleClick={resetGame} />}
            {isGameOn && <MemoryCard 
                handleClick={turnCard} 
                data={emojisData} 
                selectedCards={selectedCards} 
                matchedCards={matchedCards}/>
            }
            {isError && <ErrorCard 
                resetErrorClick={resetError}/>}
        </main>
    )
}