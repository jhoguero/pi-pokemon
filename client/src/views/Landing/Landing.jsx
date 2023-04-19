
import "./Landing.css"
import logo from "../../assets/Pokemon-Logo.png"
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <section className= "landing-wrapper">
            <div className="container">
        <img
        src={logo}
        alt="Pokémon"
        className='logoPokemon'/>
						<Link 
							className="styleBotton"
							to="/home">
							Ingresar
						</Link>
					</div>
        
        </section>
    );
}

export default LandingPage; 