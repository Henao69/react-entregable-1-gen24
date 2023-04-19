import React from 'react'
import getRandomArray from '../utils/getRandomArray'
import phrases from '../utils/phrases.json'

const Button = ( { setQuotesRandom, setNumberImg } ) => {

  const handleChangePhrase = () => {
    setQuotesRandom(getRandomArray(phrases))
    setNumberImg(getRandomArray([1, 2, 3, 4]))
  }

  return (
    <button className='App__btn' onClick={handleChangePhrase} >Probar mi suerte</button>
  )
}

export default Button