import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import {main, cell, type1 } from '../styles/theme.styl'


const Home = ({ name, onNameChange }) =>
  <div className={ main }>
    <div className={cell + " " + type1}>
      <input type="text" onChange={onNameChange} />
      <p>Hello {name}</p>
      <Link to="test">test</Link>
    </div>
  </div>;

Home.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default Home;
