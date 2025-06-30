// @/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 px-lg-5">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-auto">
            <br />
            <p className="mb-0">
              Crafted by <a href="#" className="fw-bold">Trevor Gituru</a>
            </p>
          </div>
          <div className="col-auto">
            <h5>CONNECT WITH ME:</h5>
            <div className="social-icons">
              <a href="https://twitter.com/gituru_trevor" target="_blank" rel="noopener noreferrer"><i className="lab la-twitter"></i></a>
              <a href="https://ke.linkedin.com/in/trevor-gituru-9243782a2" target="_blank" rel="noopener noreferrer"><i className="lab la-linkedin"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=254701342609&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><i className="lab la-whatsapp"></i></a>
              <a href="https://github.com/trevor-gituru" target="_blank" rel="noopener noreferrer"><i className="lab la-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

