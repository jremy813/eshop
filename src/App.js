import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Hero from './components/Hero'
import Recommended from './components/Recommended'
import Footer from './components/Footer'
import Icon1 from './assets/Free Shipping.png'
import Icon2 from './assets/Payments.png'
import Icon3 from './assets/Money.png'
import Icon4 from './assets/Finest Quality.png'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Recommended />
      <section className='app__ChooseUs'>
        <h3>Why should you choose us?</h3>
        <div className='app__Icons'>
          <div>
            <img src={Icon1} />
            <span>Free Shipping</span>
            <p>All purchases over $199 are eligible for free shipping via USPS First Class Mail</p>
          </div>
          <div>
            <img src={Icon2} />
            <span>Easy Payments</span>
            <p>All payments are processed instantly over a secure payment protocol</p>
          </div>
          <div>
            <img src={Icon3} />
            <span>Money-Back Gurantee</span>
            <p>If an item arrived damaged or you've changed your mind, you can send it back for a full refund</p>
          </div>
          <div>
            <img src={Icon4} />
            <span>Finest Quality</span>
            <p>Designed to last, each of our products has been crafted with the finest materials</p>
          </div>
        </div>

      </section>
      <Footer />
       </div>
  );
}

export default App;
