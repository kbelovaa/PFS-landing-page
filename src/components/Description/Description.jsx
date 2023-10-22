import React, { useContext, useState } from 'react';
import ThemeContext from '../../utils/themeContext';
import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import slide4 from '../../images/slide4.png';
import slide5 from '../../images/slide5.png';
import slide6 from '../../images/slide6.png';
import './Description.scss';

const Description = () => {
  const [showMore, setShowMore] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`stages-wrapper ${theme}`}>
      <div className="container">
        <div className={showMore ? 'stages stages_big' : 'stages'}>
          <div className="stage">
            <div className="stage__slides">
              <img className="stage__slide" src={slide1} alt="Slide" />
              <img className="stage__slide" src={slide2} alt="Slide" />
            </div>
            <div className="stage__info">
              <h4 className="stage__title">Design your future</h4>
              <p className={showMore ? 'hidden' : 'stage__text'}>
                Design your future with precision and purpose. Turn your dreams into actionable goals. Now is the time
                to let your imagination run as you imagine your ideal future. Here are a few questions to help you get
                started:
                <br />
                If you had all the time, capital, and freedom to choose anything you wanted, what would you do?
                <br />
                If there were no such thing as failure, what life experiences would you have?
                <br />
                If you won the lottery, would you go to the same job tomorrow?
                <span className="stage__link" onClick={() => setShowMore(true)}>
                  ...more
                </span>
              </p>
              <div className={showMore ? 'stage__text' : 'hidden'}>
                <p className="stage__passage">
                  Design your future with precision and purpose. Turn your dreams into actionable goals. Now is the time
                  to let your imagination run as you imagine your ideal future. Here are a few questions to help you get
                  started:
                  <br />
                  If you had all the time, capital, and freedom to choose anything you wanted, what would you do?
                  <br />
                  If there were no such thing as failure, what life experiences would you have?
                  <br />
                  If you won the lottery, would you go to the same job tomorrow?
                  <br />
                  Let us look at two examples of goals - one short-term and one long-term.
                </p>
                <p className="stage__passage stage__passage_strong">Short-term - New iPhone 15 Pro</p>
                <p className="stage__passage">
                  It is January, and your goal is to buy the new iPhone 15 Pro in July, priced at $1,400. You already
                  own the iPhone 14 Pro and plan to trade it in. Apple offers you $800 for the trade-in. The savings
                  target would be: $1,400 - $800 = $600. As the period is 6 months, the monthly saving would be: $600 /
                  6 = $100 per month.
                </p>
                <p className="stage__passage stage__passage_strong">Long-term - New Apartment</p>
                <p className="stage__passage">
                  You plan to purchase a new apartment in 4 years and the banks you have consulted with are willing to
                  finance 60% of the purchase price.
                  <br />
                  After research, you have identified several appealing apartments priced at $500,000. The required down
                  payment is the remaining 40% after the bank's financing, $200,000. You are planning to sell your car
                  for $60,000. This amount is to be included in your starting balance. Consequently, the savings target
                  is: $200,000. - $60,000. = $140,000. As the period is 4 years = 48 months, the monthly saving would
                  be: $140,000 / 48 = $2,917 per month.
                  <span className="stage__link" onClick={() => setShowMore(false)}>
                    less
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="stage">
            <div className="stage__slides">
              <img className="stage__slide" src={slide3} alt="Slide" />
              <img className="stage__slide" src={slide4} alt="Slide" />
            </div>
            <div className="stage__info">
              <h4 className="stage__title">Discover</h4>
              <p className="stage__text">
                To determine your current financial level, upload your financial information into our intuitive system.
                It will analyze your income, expenses, and net worth, then present the data clearly on the visually
                appealing dashboard. This gives you an accurate, real-time view of your finances.
              </p>
            </div>
          </div>
          <div className="stage">
            <div className="stage__slides">
              <img className="stage__slide" src={slide5} alt="Slide" />
              <img className="stage__slide" src={slide6} alt="Slide" />
            </div>
            <div className="stage__info">
              <h4 className="stage__title">Start your journey</h4>
              <p className="stage__text">
                Now you have a dashboard with real-time view of your finances and a clear, easy to follow plan with
                resources to move to the next level. And we are here with you every step!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
