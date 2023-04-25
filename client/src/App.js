import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  getTypes } from "./redux/actions";

import './App.css';
import { 
	BrowserRouter, 
	Route, 
	Switch
} from 'react-router-dom';


import LandingPage from "./views/Landing/Landing";
import HomePage from './views/Home/Home';
import CreatePage from "./views/CreatePoke/CreatePoke"
import DetailsPage from "./views/Details/Detail";


function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTypes());  //llamada de los tipos
	  }, []); //array de dependencia


  return (
    <BrowserRouter>
			<div>
				<div>
					<Switch>
						<Route exact path='/' component={ LandingPage } />
						<Route exact path='/home' component={ HomePage } />
						<Route exact path='/createPoke' component={ CreatePage } />
						<Route exact path='/details/:id' component={ DetailsPage } />
					</Switch>

				</div>
			</div>

		</BrowserRouter>
  );
}

export default App;
