import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { filterPokemon } from "../../redux/actions";

import './Ordenator.css'

const Ordenator = ({ setPage }) => {
    const searchPoke = useSelector((state)=>state.allPokemons)
    const dispatch = useDispatch();
    const handleFilter = (e) =>{
      setPage(0)
      dispatch(filterPokemon(e.target.name))
    }

  

  return (
    <div className='sort'>
        {searchPoke.length > 1 && <button name='aToZ' onClick={handleFilter} className='button-ordenator'>&#10607; A-Z</button>}
        {searchPoke.length > 1 && <button name='zToA' onClick={handleFilter} className='button-ordenator'>&#10607; Z-A</button>}
        {searchPoke.length > 1 && <button name="attackDesc" onClick={handleFilter} className='button-ordenator'>&#8643; ATTACK</button>}
        {searchPoke.length > 1 && <button name="attackAsc" onClick={handleFilter} className='button-ordenator'>&#8639; ATTACK</button>}
    </div>
  )
}

export default Ordenator