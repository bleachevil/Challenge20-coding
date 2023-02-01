import React from "react";
import HeaderImage from "../pics/header.jpg";
//import Nav from './nav';

const styles = {
    headerStyle: {
      backgroundImage: `url(${HeaderImage})`,
      //height:'100vh',
      marginTop:'-70px',

      fontWeight: 'bold',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      //background: "blue",
      //color: "white",
      paddingLeft: "100px",
      fontSize:'50px',
    },

  };


function Header() {
    return (

        <div className="header" style={styles.headerStyle}> 
        <h1>Jeff</h1>
      </div>

    );
}

export default Header;