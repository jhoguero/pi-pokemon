import {useSelector} from "react-redux";
import validationPoke from "../../componets/Form/validationPoke";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

import './CreatePoke.css'

const initialPoke ={
name: "",
health: "",
speed: "",
defense: "",
attack: "",
height: "",
weight: "",
types: []

}

function CreatePoke() {
  const types = useSelector(state=>state.types) // trae el estado types de redux
  const [input, setInput] = useState(initialPoke);
  const [disabler, setDisabler] = useState(true);
  const [errors, setErrors] = useState({});
  const history = useHistory()

const handleChange = (e) =>{
  if(disabler){
    setDisabler(false) //condicion para que se habilite el boton crear si no hay errores
  }
  setInput({
    ...input,
    [e.target.name]:e.target.value  // seteo el estado input con el evento segun name y value
  })
  setErrors(
   validationPoke({...input,
    [e.target.name]:e.target.value}) // valida el estado input y genera error segun la condicion validationPoke
    )
  }

  useEffect(()=>{
    console.log(errors)
  },[errors])

const handleChangeTypes = (e) =>{
  const type = JSON.parse(e.target.value) // parsea valor numerico del value del input
  if(input.types.includes(type)){
    setInput({
      ...input,
      types:[...input.types.filter((t)=> t!== type)] //metodo para remover los tipos que se quieran quitar en el create
    })
    setErrors(validationPoke({
      ...input,
      types:[...input.types.filter((t)=> t!== type)] // valida que la casilla de tipos este llena
    }))
  }else{
    setInput({
      ...input,
      types:[...input.types, type] // metodo para poner los tipos sin que se pisen 
    })
    setErrors(validationPoke({
      ...input,
      types:[...input.types, type] // valida que la casilla de typos este llena
    }))
  }
} 

  const handleSubmit= async (e) =>{
    e.preventDefault()  //para no refrescar el navegador
    if(!Object.entries(errors).length){
      const response =await axios.post("http://localhost:3001/pokemons",input) //envia post al back del pokemon creado
      if(response.data.message === 'Pokemon successfully created'){
        history.push(`/details/${response.data.new_pokemon.id}`) // ruta para ver el detalle de la creacion de pokemon
      }
    }
  }

useEffect(()=>{
console.log(input)
},[input])


  return (
    <div >
      <form onSubmit={handleSubmit} className="form-create">
        <div>
          <img src="https://pm1.narvii.com/5762/3f38ecfb4a23493049ca4ec365b17e74287d5e1d_hq.jpg" alt="poke" className="img-poke" />
        </div>
        <div>
          <label> Name</label>
          <input onChange={handleChange} value={input.name} name="name" className="input-create"/>
          {errors.name ? <label>{errors.name}</label> :<label>&nbsp;</label> }
        </div>
        <div>
          <label> Health</label>
          <input onChange={handleChange} value={input.health} type="number" name= "health" className="input-create"/>
          {errors.health ? <label>{errors.health}</label> :<label>&nbsp;</label> }
        </div>
        <div>
          <label> Speed</label>
          <input onChange={handleChange} value={input.speed} type="number" name= "speed" className="input-create"/>
          {errors.speed ? <label>{errors.speed}</label> :<label>&nbsp;</label> }
        </div>
        <div>
          <label> Attack</label>
          <input onChange={handleChange} value={input.attack} type="number" name= "attack" className="input-create"/>
          {errors.attack ? <label>{errors.attack}</label> :<label>&nbsp;</label> }
        </div>
        <div>
          <label> Defense</label>
          <input onChange={handleChange} value={input.defense} type="number" name= "defense" className="input-create"/>
          {errors.defense ? <label>{errors.defense}</label> :<label>&nbsp;</label> }
        </div>
        <div>
          <label> Height</label>
          <input onChange={handleChange} value={input.height} type="number" name= "height" className="input-create"/>
          {errors.height ? <label>{errors.height}</label> :<label>&nbsp;</label> }
        </div>
        <div>
          <label> Weight</label>
          <input onChange={handleChange} value={input.weight} type="number" name= "weight" className="input-create"/>
          {errors.weight ? <label>{errors.weight}</label> :<label>&nbsp;</label> }
        </div> 
        <div className="types-checkbox">
          <label> Type:</label>
          {errors.types ? <label>{errors.types}</label> :<label>&nbsp;</label> }
          <div className="check">
          {types?.map(t=>{
            return (
              <div key={t.id}>
                <label>{t.name}:</label>
                <input onChange={handleChangeTypes} value={`${t.id}`} type="checkbox"/>
               </div>
            )
          })}
          </div>
        </div>
        <div className="buttons-create">
          <input disabled={disabler || Object.entries(errors).length ? true : false} value="Create" type="submit"/>
          <Link to={`/home`}>
            <button>Home</button>
          </Link>
        </div>
        
      </form>
    </div>
    
  );
}

export default CreatePoke;
