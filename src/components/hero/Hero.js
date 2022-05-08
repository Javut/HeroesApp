import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const Hero = () => {

  const {heroeId} = useParams();

  const hero = getHeroById(heroeId);

  if(!hero){
    return <Navigate to='/'/>
  }


  return (
    <div>
        <h1>SOY UN HEROE MUY IMPORTANTE !!</h1>
        <p>
          {hero.superhero}
        </p>


    </div>
  )
}
