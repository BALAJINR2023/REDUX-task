import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Layout from './components/Layout'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const DefaultElement = () => {
    return (
      <>
        <h3>No page found,please check the URL</h3>
        <Link to="/">Return to Home page</Link>
      </>
    );
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="products" element={<Products/>} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<DefaultElement/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
