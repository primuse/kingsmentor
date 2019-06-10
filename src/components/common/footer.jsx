import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className='footer'>
    <div className='container'>
      <h4>Kingsmentor© 2019</h4>
      <nav>
        <Link to='/'>Latest Posts
        </Link>
        <Link to='/'>Twitter
        </Link>
      </nav>
    </div>
  </div>
);

export default Footer;
