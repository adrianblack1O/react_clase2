import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import CartWidget from "../components/CartWidget";

export default function Rooter(){

return(
	<BrowserRouter >
		<Route path='/' component={NavBar}/>
		<Switch>
			<Route exact path='/' component={ItemListContainer}/>
			<Route exact path='/productos/:catego' component={ItemListContainer}/>
           	<Route exact path='/productos/item/:produid' component={ItemDetailContainer}/>
			<Route exact path='/cart' component={CartWidget}/>
		</Switch>
	</BrowserRouter>
	)
}