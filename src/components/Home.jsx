// @/components/Home.jsx
import React, { useEffect, useRef } from 'react';

const Home = () => {
  const textRef = useRef(null);
  const intervals = useRef([]);

  useEffect(() => {
    const textArray = ['Telecommunication Engineer', 'Backend Developer'];
    let currentIndex = 0;
    const typingSpeed = 100;

    const typeText = () => {
      const currentText = textArray[currentIndex];
      let currentTextIndex = 0;

      const typingInterval = setInterval(() => {
        if (!textRef.current) return;

        if (currentTextIndex < currentText.length) {
          textRef.current.textContent += currentText[currentTextIndex];
          currentTextIndex++;
        } else {
          clearInterval(typingInterval);
          intervals.current = intervals.current.filter(
            (i) => i !== typingInterval
          );
          setTimeout(deleteText, 1000);
        }
      }, typingSpeed);

      intervals.current.push(typingInterval);
    };

    const deleteText = () => {
      const currentText = textArray[currentIndex];
      let currentTextIndex = currentText.length;

      const deletingInterval = setInterval(() => {
        if (!textRef.current) return;

        if (currentTextIndex > 0) {
          textRef.current.textContent = currentText.substring(
            0,
            currentTextIndex - 1
          );
          currentTextIndex--;
        } else {
          clearInterval(deletingInterval);
          intervals.current = intervals.current.filter(
            (i) => i !== deletingInterval
          );
          currentIndex = (currentIndex + 1) % textArray.length;
          setTimeout(typeText, 1000);
        }
      }, typingSpeed);

      intervals.current.push(deletingInterval);
    };

    // Start typing
    typeText();

    // Cleanup intervals on unmount
    return () => {
      intervals.current.forEach(clearInterval);
    };
  }, []);

  return (
    <section id="home" className="full-height px-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h1 className="display-4 fw-bold" data-aos="fade-up">
              Hi, I am <span className="text-brand">Trevor Gituru</span>
              <br />
              I am a <br />
              <span ref={textRef} className="fs-5 text-brand p-3" />
            </h1>

            <p
              className="lead mt-2 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I specialize in designing and optimizing complex network
              infrastructures while leveraging expertise in backend development
              to create robust and scalable software solutions
            </p>
            <div data-aos="fade-up" data-aos-delay="600">
              <a
                href="/CV.pdf"
                download="Trevor-Muriuki-CV"
                target="_blank"
                className="btn btn-brand me-3"
              >
                Download CV
              </a>
              <a href="#" className="link-custom">
                Call: (+254) 701 342 609
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
