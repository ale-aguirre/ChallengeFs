import React, { useEffect } from "react";
import NavBar from "./components/home/NavBar";
import Footer from "./components/home/Footer";
import Home from "./components/home/Home";
import Catalogo from './components/Catalogo/Catalogo'
import UserActivity from "./components/login/userActivity/userActivity";
import ProductScreen from "./components/products/ProductScreen";
import Dashboard from "./components/login/Admin/Dashboard";
import Login from "./components/login/User/Login";
import NuevaCuenta from "./components/login/User/NuevaCuenta";
import useCoin from "./components/crud/useCoin";
import { positions, Provider as ProviderAlert } from "react-alert";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "./Redux/item";
import { getCategory } from "./Redux/category";
import { validation} from "./Redux/user";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const category = useSelector((store) => store.category.categories);
  const products = useSelector((store) => store.item.items);
  const busqueda = useSelector((store) => store.item.busca);

  useEffect(() => {

    dispatch(validation());
    dispatch(getItems());
    dispatch(getCategory());
  }, []);
  return (
    <div>
      <ProviderAlert template={AlertTemplate} {...options}>
        <BrowserRouter>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Footer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/nuevacuenta" component={NuevaCuenta} />
          <Route exact path="/catalogo" component={Catalogo} />
          <Route exact path="/exchange" component={useCoin} />
          <Route exact path="/products/search" render={() => (<Catalogo products={busqueda.busqueda} search={busqueda.search} />)}/>
          <Route exact path="/catalogo/:id" render={({ match }) => (<div className="product"> <Catalogo user={user.id} product={products.filter((p) => p.id === Number(match.params.id))}/></div>)}/>
          <Route exact path="/products/catalogo/:id" render={({ match }) => (<Catalogo products={products.filter((p) => p.categories.id === match.params.id)}category={match.params.id}/>)}/>
          <Route exact path="/product/:productId" component={ProductScreen} />
          <Route exact path="/catalogo" component={NavBar} />
          <Route exact path="/userActivity" component={NavBar} />
          <Route exact path="/userActivity" component={UserActivity} />
          <Route path="/admin" component={Dashboard} />
        </BrowserRouter>
      </ProviderAlert>
    </div>
  );
}
export default App;
