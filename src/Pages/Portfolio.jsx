import React, { useState } from 'react';
import Image1 from "../pics/1.jpg";
import Image2 from "../pics/2.jpg";
import Image3 from "../pics/3.jpg";
import Image4 from "../pics/4.jpg";
import Image5 from "../pics/5.jpg";
import Image6 from "../pics/6.jpg";
import { FaGithub } from 'react-icons/fa';

const styles = {

  divSytle: {
    display: "flex",
    flexWrap: "wrap",

  },

  PortofolioCard: {
      flex: '1 0',
      //padding: '10px',
      textAlign: 'center',
      //borderStyle: 'solid',
      //borderWidth: '1px'
      //backgroundColor: "blue",
  },

  imageSize: {
    width: "200px",
    height: "200px",
  },

  imageSize2: {
    width: "200px",
    height: "200px",
    //backgroundColor: "blue",
  }



};



export default function Portfolio() {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div style={styles.divSytle}>
    <section style={styles.PortofolioCard}           
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}    >
    <h4>John</h4>   
    {isHovering ? (
    <a style={styles.imageSize2} href="https://github.com/bleachevil" > <FaGithub size="30px" color="black"/> John's profile</a> 
    ) : (
      <img style={styles.imageSize} src={Image1} alt="work1" />
    )}

  </section>
  <section style={styles.PortofolioCard}>
    <h4>work2</h4>
    <img style={styles.imageSize} src={Image2} alt="work3" />
  </section>
  <section style={styles.PortofolioCard}>
    <h4>work3</h4>
    <img style={styles.imageSize} src={Image3} alt="work3" />
  
  </section>
  <section style={styles.PortofolioCard}>
    <h4>work4</h4>
    <img style={styles.imageSize} src={Image4} alt="work4" />
  
  </section>
  <section style={styles.PortofolioCard}>
    <h4>work5</h4>
    <img style={styles.imageSize} src={Image5} alt="work4" />
  
  </section>

  <section style={styles.PortofolioCard}>
    <h4>work6</h4>
    <img style={styles.imageSize} src={Image6} alt="work4" />
  
  </section>
  </div>
  );
};