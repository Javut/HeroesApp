import React from 'react'
import { HeroList } from '../hero/HeroList'

export const Marvel = () => {

  const publisher = "Marvel Comics";

  return (
    <div>
        <h1>MarvelScreen</h1>
        <hr/>
        
        <HeroList publisher={publisher} />
    </div>
  )
}
