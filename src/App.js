import React from 'react';
import {Blog, Header, Footer, WhatGPT3, Features, Possibility } from './containers';
import {Navbar, CTA, Brand} from './components';
import './App.css';

const App = () => {
  return (
    <div classname ="App">
        <div classname ="gradient _bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App