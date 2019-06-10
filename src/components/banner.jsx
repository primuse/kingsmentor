import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from '../assets/svg';
import { Avatar } from './common/PostFooter.jsx';

const Banner = () => (
  <div className='container banner'>
    <div>
      <Avatar
        src='https://yt3.ggpht.com/a-/AN66SAy46JU-97ZuX23xSTCL0TH4oOsnIGmyf4qUTg=s900-mo-c-c0xffffffff-rj-k-no'
        width='60px'
        borderRadius='50%'
      />
    </div>
    <h2>Making things work ... and work well - Mobile Engineer</h2>
    <div className='nav'>
      <Link to='/'>GITHUB</Link>
      <div className='icons'>
        <Link to='/'>
          <Avatar src={Twitter} width='20px' />
        </Link>
        <Link to='/'>
          <Avatar src={Linkedin} width='20px' />
        </Link>
      </div>
    </div>
  </div>
);

export default Banner;
