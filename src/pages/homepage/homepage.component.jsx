import React from 'react';

import Directory from '../../components/directory/directory.component'; 

import './Homepage.styles.css'; 

const HomePage = ({ history }) => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;
