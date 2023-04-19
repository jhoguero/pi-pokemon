import React from 'react'

import Card from '../Card/Card'

function Cards ({allPokemons}){

  return (
    <div>Card            
    {allPokemons?.map(pokemon =>(                //mapeo de las props de pokemon solicitadas por el componente cards
    <Card key={pokemon.id} pokemon={pokemon}/>))}
    </div>
    
  )
}

export default Cards