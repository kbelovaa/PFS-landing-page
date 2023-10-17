import React, { useContext } from 'react';
import ThemeContext from '../../utils/themeContext';
import './Price.scss';

const Price = ({ handleSignUp }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={`price ${theme}`}>
        <h2 className="price__title">Price</h2>
        <div className="tariff-stages">
          <div className="progress">
            <span className="progress__name">Basic</span>
            <div className="progress__bar">
              <div className="progress__marker">
                <div className="progress__stage">Survival</div>
                <div className="progress__highlight"></div>
                <div className="progress__factors">
                  <span className="progress__factor">Dependency</span>
                  <span className="progress__factor">Solvency</span>
                </div>
              </div>
              <div className="progress__line"></div>
            </div>
          </div>
          <div className="progress">
            <span className="progress__name">Premium</span>
            <div className="progress__bar">
              <div className="progress__marker">
                <div className="progress__stage">Comfort</div>
                <div className="progress__highlight"></div>
                <div className="progress__factors">
                  <span className="progress__factor">Stability</span>
                  <span className="progress__factor">Freedom</span>
                  <span className="progress__factor">Security</span>
                </div>
              </div>
              <div className="progress__line"></div>
            </div>
          </div>
          <div className="progress">
            <span className="progress__name">Advanced</span>
            <div className="progress__bar">
              <div className="progress__marker">
                <div className="progress__stage">Thriving</div>
                <div className="progress__highlight"></div>
                <div className="progress__factors">
                  <span className="progress__factor">Flexibility</span>
                  <span className="progress__factor">Independence</span>
                </div>
              </div>
              <div className="progress__line"></div>
            </div>
          </div>
        </div>
        <div className="tariffs">
          <div className="card">
            <h3 className="card__name">Basic</h3>
            <span className="card__price">Free forever</span>
            <div className="card__line"></div>
            <button className="card__btn btn solid-button" onClick={handleSignUp}>
              Try it now
            </button>
            <ul className="card__benefits">
              <li className="card__benefit">Goal Setting</li>
              <li className="card__benefit">Expense Tracking</li>
              <li className="card__benefit">Budgeting</li>
              <li className="card__benefit">Educational Resources</li>
              <li className="card__benefit">30 min/month call with our financial adviser</li>
            </ul>
          </div>
          <div className={theme === 'light' ? 'card' : 'card card_highlighted'}>
            <h3 className="card__name">Premium</h3>
            <span className="card__price">$ 25 per month</span>
            <div className="card__line"></div>
            <button className="card__btn btn solid-button" onClick={handleSignUp}>
              Try it now
            </button>
            <span className="card__pluses">Everything in Free Plan plus:</span>
            <ul className="card__benefits">
              <li className="card__benefit">Advanced Budgeting Tools</li>
              <li className="card__benefit">Access to Smart Save</li>
              <li className="card__benefit">Exclusive Educational Content</li>
              <li className="card__benefit">Financial Health Checkups</li>
              <li className="card__benefit">2 hrs/month call with our financial adviser</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card__name">Advanced</h3>
            <span className="card__price">$ 75 per month</span>
            <div className="card__line"></div>
            <button className="card__btn btn solid-button" onClick={handleSignUp}>
              Try it now
            </button>
            <span className="card__pluses">Everything in Premium plan plus:</span>
            <ul className="card__benefits">
              <li className="card__benefit">Wealth Management Services</li>
              <li className="card__benefit">Tax Optimization</li>
              <li className="card__benefit">Estate Planning</li>
              <li className="card__benefit">Advanced Analytics</li>
              <li className="card__benefit">Unlimited time with our financial adviser</li>
            </ul>
          </div>
        </div>
        <div className="circle-shadow"></div>
      </div>
    </div>
  );
};

export default Price;
