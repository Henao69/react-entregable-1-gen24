import './App.css'
import Phrase from './components/Phrase';
import Button from './components/button';
import pharses from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray';
import { useState } from 'react';

const imgs = [1, 2, 3, 4]

function App() {

  const [quotesRandom, setQuotesRandom ] = useState(getRandomArray(pharses))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))
  console.log(numberImg)

  const appStyle = {
    backgroundImage: `url('/backgrounds/fondo${numberImg}.jpg')`
  }

  return (
    <div style={appStyle} className="App">
      <h1 className='App__title'>GALLETAS DE LA FORTUNA</h1>
      <Phrase quotesRandom={quotesRandom}/>
      <Button 
      setQuotesRandom={setQuotesRandom} 
      setNumberImg={setNumberImg}
      />
    </div>
  )
}

export default App
