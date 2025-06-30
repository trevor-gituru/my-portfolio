// @/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="full-height px-lg-5">
      <div className="container">

        <div className="row pb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <h6 className="text-brand">Skills</h6>
            <h1>What I can do</h1>
          </div>
        </div>

        <div className="row gy-4">

          <div className="col-md-4" data-aos="fade-up">
            <div className="p-4 bg-base rounded-4 shadow-effect">
              <div className="card-body rounded-4 display-6">
                <i className="lab la-html5 icon three-quarters"></i><span>HTML5</span>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="service p-4 bg-base rounded-4 shadow-effect">
              <div className="card-body rounded-4 display-6">
                <i className="lab la-css3-alt icon"></i><span className="text-effect">CSS</span>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="service p-4 bg-base rounded-4 shadow-effect">
              <div className="card-body rounded-4 display-6">
                <i className="lab la-js-square icon"></i><span>Javascript</span>
              </div>
            </div>
          </div>

        </div>

        <br />

        <div className="row gy-4">

          <div className="col-md-4" data-aos="fade-up">
            <div className="p-4 bg-base rounded-4 shadow-effect">
              <div className="card-body rounded-4 display-6">
                <i className="lab la-php icon three-quarters"></i><span>PHP</span>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="service p-4 bg-base rounded-4 shadow-effect">
              <div className="card-body rounded-4 display-6">
                <i className="lab la-java icon"></i><span className="text-effect">Java</span>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="service p-4 bg-base rounded-4 shadow-effect">
              <div className="card-body rounded-4 display-6">
                <i className="lab la-python icon"></i><span>Python</span>
              </div>
            </div>
          </div>

        </div>

        <br />

        <div className="row gy-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="p-4 bg-base rounded-4 shadow-effect">
              <div className="card-body rounded-4 display-6">
                <i className="lab la-git icon three-quarters"></i><span>Git</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;

