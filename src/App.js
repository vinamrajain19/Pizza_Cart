import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import ProductsPage from './pages/ProductsPage';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import { getCart,storeCart } from './helpers';

  

// ^  A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element.
// ^ functional component , in route path -> prop 
function App(){

    const [ cart, setCart ] = useState({});
    //  Fetch from local Storage
    useEffect(() => {
        getCart().then(cart => {
            setCart(JSON.parse(cart));
        });
    },[]);

    useEffect(() => {
        storeCart(JSON.stringify(cart));
    },[cart]); 


    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}> 
                    <Navigation/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/products" element={<ProductsPage/>}/>
                        <Route exact path="/products/:_id" element={<SingleProduct/>}/>
                        <Route exact path="/cart" element={<Cart/>}/>
                    </Routes>
                </CartContext.Provider>
            </Router>
        </>
        // ^ This is JSX not HTML
    )  
}

export default App;