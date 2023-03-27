import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CartProvider } from './context/CartContex';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEyLSX-A42kW369YMA9OTKTlk7AfxAWx0",
  authDomain: "ligoleyen-shop.firebaseapp.com",
  projectId: "ligoleyen-shop",
  storageBucket: "ligoleyen-shop.appspot.com",
  messagingSenderId: "461822053928",
  appId: "1:461822053928:web:12ad93237731bade76af1d",
  measurementId: "G-MSFJY2HT6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
        </Routes>   
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
