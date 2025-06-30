// @/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="full-height px-lg-5">
      <div className="container">

        <div className="row pb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <h6 className="text-brand">ABOUT</h6>
            <h1>My Journey</h1>
          </div>
        </div>

        <div className="row gy-5">
          <div className="col-lg-6">

            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Education</h3>
            <div className="row gy-4">

              <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4 className="text-brand">Certificate</h4>
                  <h5>Mobile Software Development &amp; Entrepreneurship Program</h5>
                  <p className="text-brand mb-2">eMobilis (1/2019 - 7/2019)</p>
                  <p className="mb-0">I acquired skills in:</p>
                  <ul>
                    <li><span className="text-brand">Java:</span> Learned the fundamentals of Java programming language</li>
                    <li><span className="text-brand">Android programming:</span> Acquired knowledge and hands on experience in developing Android applications</li>
                    <li><span className="text-brand">PHP:</span> Developed skills in server-side scripting language for web development</li>
                    <li><span className="text-brand">MYSQL:</span> Learnt database management and querying using MySQL</li>
                    <li><span className="text-brand">Web Development:</span> Acquired skills in HTML, CSS, Javascript and Bootstrap and other web technologies for creating dynamic and interactive websites</li>
                  </ul>
                </div>
              </div>

              <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4 className="text-brand">Bachelor in Science</h4>
                  <h5>Telecommunication and Information Engineering</h5>
                  <p className="text-brand mb-2">Jomo Kenyatta University of Agriculture and Technology (09/2019 - Present)</p>
                  <p className="mb-0">Some of the skills I have acquired so far include:</p>
                  <ul>
                    <li>Mastery of advanced telecommunication principles and protocols, including signal processing and modulation techniques</li>
                    <li>Expertise in network engineering, including design and configuration</li>
                    <li>Knowledge of Information systems management, including database administration</li>
                    <li>Familiarity with telecommunications technologies such as VoIP and LTE</li>
                    <li>Ability to analyze and optimize telecommunication network for efficiency and performance</li>
                    <li>Familiarity with IoT principles and applications</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Experience</h3>
            <div className="row gy-4">

              <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>ICT Intern</h4>
                  <p className="text-brand mb-2">State Department of Housing and Urban Development (06/2022 - 08/2022)</p>
                  <p className="mb-0">Tasks performed:</p>
                  <ul>
                    <li>Providing user support and training.</li>
                    <li>Assisting with computer systems upgrade, maintenance and software installation.</li>
                    <li>Network set up and configuration.</li>
                    <li>Help desk management.</li>
                  </ul>
                </div>
              </div>

              <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>ICT Intern</h4>
                  <p className="text-brand mb-2">National Social Security Fund (07/2023 - 09/2023)</p>
                  <p className="mb-0">Activities I undertook included:</p>
                  <ul>
                    <li>Registration of Employees and Employers</li>
                    <li>Benefits Registration</li>
                    <li>Data Analysis</li>
                    <li>Computing UPN</li>
                    <li>Customer Care and resolution of customer complaints</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

