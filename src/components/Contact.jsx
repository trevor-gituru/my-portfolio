// @/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="full-height px-lg-5">
      <div className="container">

        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4" data-aos="fade-up">
            <h6 className="text-brand">GET IN TOUCH</h6>
            <h4>
              Reach out to me for any freelancing opportunities, contract work or just to say hi!
            </h4>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
            <form action="#" className="row g-lg-3 gy-3">
              <div className="form-group col-md-12">
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="form-group col-md-6">
                <input type="number" className="form-control" placeholder="Enter your phone number" />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group col-12">
                <input type="text" className="form-control" placeholder="Enter subject" />
              </div>
              <div className="form-group col-12">
                <textarea rows="4" className="form-control" placeholder="Enter your message"></textarea>
              </div>
              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand">Contact me</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

