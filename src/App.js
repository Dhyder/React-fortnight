import React from 'react';

import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Features, Header, Fortnight, Possibility } from './containers';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand/>
        <Fortnight/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App