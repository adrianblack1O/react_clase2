import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import "../css/materialize.min.css";
import "../css/materialize.css";

export default function Rooter(){

return(
	<BrowserRouter >
		<Route path='/' component={NavBar}/>
		<Switch>
			<Route exact path='/' component={ItemListContainer}/>
			<Route path='/productos' component={ItemListContainer}/> 
           	<Route exact path='/item/:produid' component={ItemDetailContainer}/>
		</Switch>
	</BrowserRouter>
	)
}