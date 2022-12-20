import Navbar from './component/Navbar';
import Cart from './component/Cart';
import Store from './component/Store';
import './App.css';
import '../src/styles/store.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false)

  const handleClick = (item)=>{
    //console.log(item);
    let isPresent = false;
    cart.forEach((product)=>{
      if (item.id === product.id)
      isPresent =true;
    })
    if (isPresent){
       setWarning(true);
       setTimeout(()=>{
        setWarning(false);
       }, 2000);
       return;

      }
       setCart([...cart, item]);
       alert("Item is addedd to cart");
   
  }
   
  return (
    <>
     <Navbar size={cart.length} setShow={setShow}/>
     {
       show ?<Store handleClick={handleClick}/> :
           <Cart cart={cart} setCart={setCart}/>
     }
     
     {
       warning && <div className='warning'>Item is already added to your cart</div>
     }
    </>
  );
}

export default App;
