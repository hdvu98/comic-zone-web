import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Footer from '../footer/footer';
import Navbars from '../navigation-bar/NavigationBar'


const PageLayout=(props)=> {

    const{ children} = props;
  return (
    <div>
        <Navbars></Navbars>
      <main >
          
        {children}  
      </main>
      <Footer></Footer>
    </div>
  );
}

PageLayout.propTypes = {
    children: PropTypes.node
  };

export default PageLayout;
  