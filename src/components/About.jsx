// @/components/About.jsx
import React from 'react';

const cardClass =
  'bg-base p-6 rounded-xl transition duration-300  ease-in-out hover:shadow-[0_0_20px_#e0f780]';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 lg:px-24 py-16 bg-base2 text-body"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="pb-8" data-aos="fade-up">
          <h6 className="text-brand text-sm font-semibold uppercase">About</h6>
          <h1 className="text-4xl font-bold mt-2 text-heading">My Journey</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Education */}
          <div className="lg:w-1/2">
            <h3
              className="text-2xl font-semibold mb-6 text-heading"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Education
            </h3>

            <div className="space-y-6">
              {/* Certificate */}
              <div
                className={cardClass}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h4 className="text-brand text-lg font-semibold">
                  Certificate
                </h4>
                <h5 className="text-xl font-semibold mt-1 text-heading">
                  Mobile Software Development & Entrepreneurship Program
                </h5>
                <p className="text-brand text-sm mb-4">
                  eMobilis (1/2019 - 7/2019)
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <span className="text-brand font-semibold">Java:</span>{' '}
                    Fundamentals of Java programming
                  </li>
                  <li>
                    <span className="text-brand font-semibold">Android:</span>{' '}
                    App development experience
                  </li>
                  <li>
                    <span className="text-brand font-semibold">PHP:</span>{' '}
                    Server-side scripting
                  </li>
                  <li>
                    <span className="text-brand font-semibold">MySQL:</span> DB
                    management & queries
                  </li>
                  <li>
                    <span className="text-brand font-semibold">
                      Web Development:
                    </span>{' '}
                    HTML, CSS, JS, Bootstrap
                  </li>
                </ul>
              </div>

              {/* Bachelor */}
              <div
                className={cardClass}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <h4 className="text-brand text-lg font-semibold">
                  Bachelor in Science
                </h4>
                <h5 className="text-xl font-semibold mt-1 text-heading">
                  Telecommunication and Information Engineering
                </h5>
                <p className="text-brand text-sm mb-4">
                  JKUAT (09/2019 - Present)
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Signal processing & modulation</li>
                  <li>Network engineering & design</li>
                  <li>Information systems and DBs</li>
                  <li>Familiar with VoIP, LTE, IoT</li>
                  <li>Network analysis & optimization</li>
                </ul>
              </div>
              {/* ALX */}
              <div
                className={cardClass}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <h4 className="text-brand text-lg font-semibold">
                  Certificate 
                </h4>
                <h5 className="text-xl font-semibold mt-1 text-heading">
                  Software Engineering Foundations
                </h5>
                <p className="text-brand text-sm mb-4">ALX (01/24 - 08/24)</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    Core C programming concepts: variables, loops, functions,
                    pointers, arrays, strings
                  </li>
                  <li>Memory management: malloc, free, static libraries</li>
                  <li>
                    Data structures: linked lists (singly & doubly), stacks,
                    queues, hash tables
                  </li>
                  <li>
                    Algorithms: sorting, searching, bit manipulation, recursion
                  </li>
                  <li>Makefiles and build process automation</li>
                  <li>Basic shell scripting and command line tools</li>
                  <li>Python basics: data structures, OOP, exceptions, TDD</li>
                  <li>SQL introduction and query writing</li>
                  <li>JavaScript fundamentals: scopes, closures, objects</li>
                  <li>Web fundamentals: web scraping, RESTful API basics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="lg:w-1/2">
            <h3
              className="text-2xl font-semibold mb-6 text-heading"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Experience
            </h3>

            <div className="space-y-6">
              {/* Internship 1 */}
              <div
                className={cardClass}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h4 className="text-xl font-semibold text-heading">
                  ICT Intern
                </h4>
                <p className="text-brand text-sm mb-4">
                  State Department of Housing and Urban Development (06/2022 -
                  08/2022)
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>User support and training</li>
                  <li>System upgrades and installations</li>
                  <li>Network setup and configuration</li>
                  <li>Help desk operations</li>
                </ul>
              </div>

              {/* Internship 2 */}
              <div
                className={cardClass}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <h4 className="text-xl font-semibold text-heading">
                  Junior IT Technician
                </h4>
                <p className="text-brand text-sm mb-4">
                  National Social Security Fund (07/2023 - 09/2023)
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Registration of Employees & Employers</li>
                  <li>Benefits registration & data entry</li>
                  <li>UPN computation & data analysis</li>
                  <li>Customer care & issue resolution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
