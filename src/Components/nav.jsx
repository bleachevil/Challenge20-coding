import React from "react";

const styles = {

    headerNav: {
        position: 'absolute',
        top: '50px',
        right: '0px',
        fontSize: "20px",
        fontcolor: "White"
    },
    headerli: {
        display: 'inline-block',
        marginLeft: '25px',
        textAlign: 'center',
        fontcolor:"white"
    }

  };


function Nav({currentPage, handlePageChange}) {
    return (
        <div >
        <ul className="nav nav-tabs" style={styles.headerNav}>
        <li className="nav-item" style={styles.headerli}> 
            <a href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </li>
        <li className="nav-item" style={styles.headerli}> 
            <a href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </li>
        <li className="nav-item" style={styles.headerli}> 
            <a href="#Portflio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li>
        <li className="nav-item" style={styles.headerli}> 
            <a href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </li>
    </ul>
    </div>
    );
}

export default Nav;