import React, { useContext } from 'react';
import devicesImg from '../../images/devices.png';
import ThemeContext from '../../utils/themeContext';
import './Presentation.scss';

const Presentation = ({ handleSignUp }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={`description ${theme}`}>
        <img className="description__img" src={devicesImg} alt="Devices" />
        <div className="description__text">
          <h1 className={`description__title ${theme}`}>
            Your financial <span className="description__title description__title_highlighted">future</span> simplified
          </h1>
          <p className="description__text">
            PF is designed to provide a complete picture and real understanding of your finances. With its intuitive
            interface, it analyses, provides insights, creates
            <br />a personalized plan and monitors your progress towards financial independence.
          </p>
          <button className="btn solid-button" onClick={handleSignUp}>
            Get access
          </button>
        </div>
      </div>
      <div className="free-offer">
        <div className="offer">
          <span className="offer__title">Free call with adviser</span>
          <span className="offer__text">Personal attention</span>
        </div>
        <div className="offer">
          <span className="offer__title">Free resources</span>
          <span className="offer__text">40+ high-impact articles</span>
        </div>
        <div className="offer">
          <span className="offer__title">Free personal dashboard</span>
          <span className="offer__text">With live metrics</span>
        </div>
      </div>
      <div className="steps">
        <div className="step">
          <span className="step__number">1</span>
          <span className="step__title">Design your future</span>
          <p className="step__text">
            Envision what you want your future to look like, break it into parts, find and calculate their cost and set
            clear, measurable goals
          </p>
        </div>
        <div className="step">
          <span className="step__number">2</span>
          <span className="step__title">Discover</span>
          <p className="step__text">
            The system will determine your current financial level from your financial information
          </p>
        </div>
        <div className="step">
          <span className="step__number">3</span>
          <span className="step__title">Plan</span>
          <p className="step__text">
            Based on previous two steps you will receive a plan with actionable steps backed by a system that will guide
            you and monitor your progress
          </p>
        </div>
        <div className={`line ${theme}`}>
          <div className="line__base"></div>
          <div className="line__marker"></div>
          <div className="line__marker"></div>
          <div className="line__marker"></div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
