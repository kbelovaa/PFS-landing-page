import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../utils/themeContext';
import photo1 from '../../images/photo1.jpeg';
import photo2 from '../../images/photo2.jpeg';
import photo3 from '../../images/photo3.jpeg';
import photo4 from '../../images/photo4.jpeg';
import photo5 from '../../images/photo5.jpeg';
import './Feedback.scss';

const Feedback = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [containerWidthVisible, setContainerWidthVisible] = useState(0);
  const [containerWidthScroll, setContainerWidthScroll] = useState(0);

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('feedback');
      const containerWidthVisible = container.offsetWidth;
      const containerWidthScroll = container.scrollWidth;
      setContainerWidthVisible(containerWidthVisible);
      setContainerWidthScroll(containerWidthScroll);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (event) => {
    const { scrollLeft } = event.target;
    const percent = scrollLeft / (containerWidthScroll - containerWidthVisible);
    setScrollPercent(percent);
  };

  const defineDotStyle = (diff) => {
    const res = Math.abs(scrollPercent - diff);
    if (res < 0.2) {
      return 'feedback__dot feedback__dot_1';
    }

    if (res >= 0.2 && res < 0.4) {
      return 'feedback__dot feedback__dot_2';
    }

    if (res >= 0.4 && res < 0.6) {
      return 'feedback__dot feedback__dot_3';
    }

    if (res >= 0.6 && res < 0.8) {
      return 'feedback__dot feedback__dot_4';
    }

    return 'feedback__dot feedback__dot_5';
  };

  return (
    <div className={`feedback ${theme}`}>
      <div className="feedback__indicator">
        <div className={defineDotStyle(0.05)}></div>
        <div className={defineDotStyle(0.25)}></div>
        <div className={defineDotStyle(0.45)}></div>
        <div className={defineDotStyle(0.65)}></div>
        <div className={defineDotStyle(0.85)}></div>
      </div>
      <div id="feedback" className="feedback__wrap" onScroll={handleScroll}>
        <div className="feedback__card">
          <div className="feedback__photo">
            <img src={photo1} alt="User photo" className="feedback__image" />
          </div>
          <div className="feedback__info">
            <span className="feedback__name">Artsiom</span>
            <span className="feedback__city">New York</span>
            <p className="feedback__text">Nice way to become millionaire!</p>
          </div>
        </div>
        <div className="feedback__card">
          <div className="feedback__photo">
            <img src={photo2} alt="User photo" className="feedback__image" />
          </div>
          <div className="feedback__info">
            <span className="feedback__name">Hanna</span>
            <span className="feedback__city">New York</span>
            <p className="feedback__text">I can check all income and expenses at convenient way</p>
          </div>
        </div>
        <div className="feedback__card">
          <div className="feedback__photo">
            <img src={photo3} alt="User photo" className="feedback__image" />
          </div>
          <div className="feedback__info">
            <span className="feedback__name">Alyona</span>
            <span className="feedback__city">New York</span>
            <p className="feedback__text">Nice way to become millionaire!</p>
          </div>
        </div>
        <div className="feedback__card">
          <div className="feedback__photo">
            <img src={photo4} alt="User photo" className="feedback__image" />
          </div>
          <div className="feedback__info">
            <span className="feedback__name">Kristian</span>
            <span className="feedback__city">New York</span>
            <p className="feedback__text">Nice way to become millionaire!</p>
          </div>
        </div>
        <div className="feedback__card">
          <div className="feedback__photo">
            <img src={photo5} alt="User photo" className="feedback__image" />
          </div>
          <div className="feedback__info">
            <span className="feedback__name">Ann</span>
            <span className="feedback__city">New York</span>
            <p className="feedback__text">Nice way to become millionaire!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
