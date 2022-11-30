import React from 'react';

import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Features, Header, Fortnight, Possibility } from './containers';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
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