import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { User } from '../../assets/svg';
import { AvatarCont, Avatar, Tooltip } from './PostFooter.jsx';


const Card = ({
  header, body, author, time
}) => (
    <div className='card'>
      <div className='card-content'>
        <Link to='/'>
          <header>{header}</header>
          <p>{body}</p>
        </Link>
        <footer>
          <AvatarCont as="a" href="/" className='avatar-cont'>
            <Tooltip className='tooltip'>{author}</Tooltip>
            <Avatar src={User} />
          </AvatarCont>
          <h5>{time}</h5>
        </footer>
      </div>
    </div>
);

Card.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;
