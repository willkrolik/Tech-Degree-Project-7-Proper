import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const Buttons = props => (
  <BrowserRouter>
    <ul className="course-nav">
    <li><a href='/courses/Cats' onclick={console.log("howdy")}>Cats</a></li>
    <li><a href='/courses/Dogs'>Dogs</a></li>
    <li><a href='/courses/Birds'>Birds</a></li>
  </ul> 
  </BrowserRouter>
);

export default Buttons;