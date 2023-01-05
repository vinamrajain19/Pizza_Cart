import Product from "./Product";
import { useState, useEffect,useContext } from "react";
import { CartContext } from "../CartContext";


// ^ Hooks
// ^ With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.


const Products = () => {

  const {name} = useContext(CartContext);
   
  // &  use of useState hook -> useState is a React Hook that lets you add a state variable to your component. const [state, setState] = useState(initialState) Usage. Adding state to a component. Updating state based on the previous state.
  const[products,setProducts] = useState([]);   // * when state changes then component re-render again

  // & use of useEffect hook -> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
  useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(products => {
        setProducts(products);
    });
  }, []);   // &  [] -> dependencies -> so useeffect will run its code when any of its dependencies changes 

  return (
    <div className="container mx-auto pb-24">

        <h1 className="text-lg font-bold my-8">Products {name}</h1>

        <div className="grid grid-cols-5 my-8 gap-24">
 
           {
             products.map(product => <Product key={product._id} product={product}/>) // ^ prop -> produt = {product} -> using this we have pass every single product to our product.js component
           }

        </div>

    </div>
  )
}

export default Products;