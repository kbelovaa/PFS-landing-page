import React, { useContext } from 'react';
import ThemeContext from '../../utils/themeContext';
import './Start.scss';

const Start = ({ handleSignUp }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={`start ${theme}`}>
        <h2 className="start__title">Start for free</h2>
        <span className="start__subtitle">No credit card needed</span>
        <button className="start__btn btn solid-button" onClick={handleSignUp}>
          Sign up
        </button>
        <p className="start__text">
          We understand the challenges of starting out on your financial journey. That is why we believe the last thing
          you need is another bill. With us, you will receive full access to our exceptional system, completely free on
          the first two levels. We want you to experience the true potential and see the impact it can have on your
          financial life. As you progress and reach level 3 Financial Freedom, we are confident that you will have
          experienced the immense value and benefits it brings, and continue your financial journey with the premium
          version.
        </p>
      </div>
    </div>
  );
};

export default Start;
