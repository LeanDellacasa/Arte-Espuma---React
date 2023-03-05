import React from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import { Footer } from './components/Footer/Footer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />}/>
          <Route exact path={"/category/:tipe"} element={<ItemListContainer />}/>
          <Route exact path={"/producto/:id"} element={<ItemDetailContainer />}/>
          <Route exact path={"*"} element={<Error404 />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
