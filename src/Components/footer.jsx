import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa';

const styles = {
  footercenter: {

  },

  fontli: {
      display: 'inline-block',
      marginLeft: '25px',
      textAlign: 'center',
      fontcolor:"white"
  }

};


function Footer() {
    return (

     <footer style={{display: 'flex', justifyContent: 'center'}}>
       <div style={styles.fontli}>

            <a class="list-group-item" href='http://github.com/bleachevil'>
            <FaGithub size="30px" color="black"/>
            </a>

            
            <a class="list-group-item" style={styles.fontli} href='https://www.linkedin.com/in/jeff-zhang-mba-cpa-00167372/'>
            <FaLinkedinIn size="30px" color="black"/>
            </a>

            <a class="list-group-item" style={styles.fontli} href='https://twitter.com/'>
            <FaTwitterSquare size="30px" color="black"/>
            </a>
          
        </div>
       </footer>

    );
}

export default Footer;