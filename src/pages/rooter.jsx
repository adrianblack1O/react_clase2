import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Orders from "../components/Orders";

export default function Rooter(){

return(
	<BrowserRouter >
		<Route path='/' component={NavBar}/>
		<Switch>
			<Route exact path='/' component={ItemListContainer}/>
			<Route exact path='/productos/:catego' component={ItemListContainer}/>
           	<Route exact path='/productos/item/:produid' component={ItemDetailContainer}/>
			<Route exact path='/cart' component={Cart}/>
			<Route exact path='/checkout' component={Orders}/>
		</Switch>
	</BrowserRouter>
	)
}