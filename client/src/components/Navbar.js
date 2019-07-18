import React from 'react';
import PropTypes from 'prop-types';
import WordForm from './WordForm';

const Navbar = props => {
  return (
    <div className='horizontal-navbar'>
      <h1 id='logo'>MyDic</h1>
      <WordForm />
    </div>
  );
};

export default Navbar;
