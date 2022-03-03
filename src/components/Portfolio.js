import React, { useState } from 'react';
import Navbar from './navbar'
import Resume from './Resume'
import About from './About'
import WorkSamples from './WorkSamples'
import Contact from './Contact'

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
          case 'WorkSamples':
            return <WorkSamples />;
          case 'Contact':
            return <Contact />;
          case 'Resume':
            return <Resume />;
          default:
            return <About />;
        }
    };
    return(
        <div>
            <Navbar setCurrentPage={setCurrentPage}/>
            {renderPage()}
        </div>
    );
};

export default Portfolio;