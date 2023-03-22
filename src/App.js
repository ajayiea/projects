import React from 'react'

import { Footer, Blog, Possibility, Features, Whatcodawebsite, Header} from './containers';
import {CTA, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <Whatcodawebsite />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
     
    </div>
  )
}

export default App