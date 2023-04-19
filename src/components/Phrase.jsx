import React from 'react'

const Phrase = ( { quotesRandom } ) => {
  return (
    <p className='App__phrase'> {quotesRandom.phrase} </p>
  )
}

export default Phrase