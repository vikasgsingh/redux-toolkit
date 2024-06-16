import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import getHomeSlice from './pages/store/slices/getHomeSlice';
import getproductDetailSlice from './pages/store/slices/getProDetailSlice';
import getCartSlice from './pages/store/slices/getCartSlice';
import getUser from './pages/store/slices/UserSlice'
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    getHomeData: getHomeSlice,
    getHomeCat:getHomeSlice,
    getproductDetails:getproductDetailSlice,
    getCart:getCartSlice,
    deleteCart:getCartSlice,
    addCart:getCartSlice,
    loginData:getUser
  },
});
export default store;

root.render(
  <Provider store={store}>
      <App/>
  </Provider> 
);
                                                                                                        

