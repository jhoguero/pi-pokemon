import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './TypesFilter.css'
import { typeFilter, getTypes } from "../../redux/actions";

const TypesFilter = ({ setPage }) => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const filter = useSelector((state) => state.filter);  //ejecucion del filter de tipos pokemon
    
    useEffect(() => {
        dispatch(getTypes()); //llamado a los tipos
      }, []);

    const handleFilter = (type) => {
        setPage(0);
        dispatch(typeFilter(type));
      };
    
  return (
    <div className='type-container'>
        {types?.map((t, i) => (
          <button
            key={i}
            onClick={() =>
              filter === t.name ? handleFilter("all") : handleFilter(t.name)}
            
            className='button-type'
          >
            {t.name.toUpperCase()}
          </button>
        ))}
    </div>
  )
}

export default TypesFilter