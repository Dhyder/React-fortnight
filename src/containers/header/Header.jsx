import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="fortnight__header section__padding" id='home'>
      <div className="fortnight__header-content">
        <h1 className="gradient__text">
          Discovering Something Amazing With Fortnight Open AI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsum amet earum, illo debitis vitae pariatur minima cumque commodi saepe! Vitae voluptas, eaque ducimus pariatur assumenda nostrum suscipit. Ab, aut?
        </p>
        <div className="fortnight__header-content__input">
          <input type="email" name="" id="" placeholder='Your Email Address' required />
          <button type="button">Get Started</button>
        </div>
        <div className="fortnight__header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="fortnight__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header