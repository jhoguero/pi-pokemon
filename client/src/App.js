import './App.css';
import { 
	BrowserRouter, 
	Route, 
	Switch
} from 'react-router-dom';


import LandingPage from "./views/Landing/Landing";
import HomePage from './views/Home/Home';

import CreatePage from "./views/Create/Create";
import DetailsPage from "./views/Details/Detail"

function App() {
  return (
    <BrowserRouter>
			<div>
				<div>
					<Switch>
						<Route exact path='/' component={ LandingPage } />
						<Route exact path='/home' component={ HomePage } />
						{/* <Route exact path='/create' component={ CreatePage } />
						<Route exact path='/details/:id' component={ DetailsPage }  /> */}
						{/* <Route path='*' component={ ErrorPage } /> */}
					</Switch>

				</div>
			</div>

		</BrowserRouter>
  );
}

export default App;
