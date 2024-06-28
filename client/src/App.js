import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import ProductDetail from './components/ProductDetail/ProductDetail';
import Order from './components/Order/Order';
import SignIn from './components/SignIn/SignIn';
import Success from './components/Success/Success';
import Error from './components/Error/Error';
import ScrollToTop from './components/ScrollToTop';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './redux/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch, auth])

  console.log(user);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
