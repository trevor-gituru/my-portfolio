// @/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import personImage from '../assets/person.png'; // Adjust path as needed

const Home = () => {
  const textRef = useRef(null);
  const intervals = useRef([]);

  useEffect(() => {
    const textArray = ['Telecommunication Engineer', 'Full-stack Developer'];
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

    typeText();

    return () => intervals.current.forEach(clearInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-24 px-6 lg:px-24 bg-base2 text-body"
    >
      {/* Left: Profile Image */}
      <div
        className="mb-10 lg:mb-0 lg:mr-12 flex-shrink-0"
        data-aos="fade-right"
      >
        <img
          src={personImage}
          alt="Trevor Gituru"
          className="w-full max-w-xs sm:max-w-md lg:w-[28rem] h-auto rounded-2xl object-cover border-4 border-brand shadow-[0_0_50px_rgba(224,247,128,0.3)]"
        />
      </div>

      {/* Right: Text Content */}
      <div className="max-w-2xl text-center lg:text-left" data-aos="fade-left">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Hi, I am <span className="text-brand">Trevor Gituru</span>
          <br />
          I am a <br />
          <span ref={textRef} className="text-xl text-brand pt-3 block h-8" />
        </h1>

        <p className="text-lg mt-4 mb-8 leading-relaxed">
          I specialize in designing and optimizing complex network
          infrastructures while leveraging expertise in backend development to
          create robust and scalable software solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
          <a
            href="/CV.pdf"
            download="Trevor-Muriuki-CV"
            target="_blank"
            rel="noreferrer"
            className="bg-brand text-base2 font-bold px-6 py-3 rounded shadow hover:bg-brand2 transition"
          >
            Download CV
          </a>
          <a
            href="tel:+254701342609"
            className="font-semibold underline hover:text-brand transition"
          >
            Call: (+254) 701 342 609
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
