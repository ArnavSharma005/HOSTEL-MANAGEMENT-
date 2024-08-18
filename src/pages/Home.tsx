import React, { useEffect, useState } from 'react';
import vid from '../assets/Untitled video - Made with Clipchamp.mp4';
import Footer from '../component/Footer';
import LoginPopup from '../component/LoginPopup';
import { usePopup } from '../context api/toggle';

const Home: React.FC = () => {
  const { toggleLogin, isLogin } = usePopup();
  const sentence = 'Seamlessly manage your hostel life, fixing issues made easy';
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentCharIndex < sentence.length) {
      const charInterval = setInterval(() => {
        setCurrentCharIndex((prevIndex) =>
          prevIndex < sentence.length ? prevIndex + 1 : prevIndex
        );
      }, 100);

      return () => clearInterval(charInterval);
    }
  }, [currentCharIndex, sentence.length]);

  return (
    <>
      <div className={`${isLogin ? 'blur' : ''}`}>
        <div className="relative flex flex-col items-center justify-center h-screen p-4 text-center overflow-hidden">
          <video
            src={vid}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            loop
            autoPlay
            muted
            playsInline
          ></video>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

          <h1 className="text-custom-gray text-6xl font-bold mb-8">Hostel Mate</h1>
          <div className="text-3xl text-custom-gray font-bold mt-4 w-full max-w-4xl text-pretty">
            {sentence.slice(0, currentCharIndex)}
          </div>

          <button
            onClick={toggleLogin}
            className="mt-8 bg-custom-gray text-custom-dark-blue border-custom-dark-blue hover:border-2 font-bold py-2 px-6 rounded"
          >
            Get Started
          </button>
        </div>
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      </div>

      <LoginPopup isLogin={isLogin} toggleLogin={toggleLogin} />
    </>
  );
};

export default Home;
