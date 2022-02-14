import React from 'react';
import './footer.css'
const Footer = () => {
  return <div className='footer'>
          <ul className='footer-ul'>
            <li><a className='footer-item' href='https://www.linkedin.com/in/dario-mamani/' target='_blank' rel="noreferrer"><i class="fab fa-linkedin"></i></a></li>
            <li><a className='footer-item' href='https://github.com/dariomamani48' target='_blank' rel="noreferrer"><i class="fab fa-github-square"></i></a></li>
            <li><a className='footer-item' href='https://www.instagram.com/dario_mamani90/?hl=es' target='_blank' rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
            <li><a className='footer-item' href='https://www.facebook.com/dario.md' target='_blank' rel="noreferrer"><i class="fab fa-facebook-square"></i></a></li>
          </ul> 
          <div className='firma'>
              <p>Hecho con <i class="fas fa-heart"></i> por Dario Mamaní</p>
          </div>
          </div>;
};

export default Footer;
