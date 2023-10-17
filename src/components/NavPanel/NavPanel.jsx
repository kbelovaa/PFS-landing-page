import React, { useContext } from 'react';
import ThemeContext from '../../utils/themeContext';
import './NavPanel.scss';

const NavPanel = ({ handleSignUp }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <div className="container">
      <nav className={`nav ${theme}`}>
        <div className="nav__toggle">
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={handleThemeChange}
            className="nav__checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="nav__switch">
            <svg
              className="nav__icon nav__icon_moon"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M12.0026 7.82273L12.4762 7.98333C12.5373 7.80299 12.4907 7.60355 12.356 7.46897C12.2213 7.33439 12.0218 7.28804 11.8415 7.34942L12.0026 7.82273ZM6.07727 1.9043L6.55078 2.06489C6.61194 1.88455 6.56535 1.68511 6.43061 1.55053C6.29588 1.41596 6.09639 1.3696 5.91611 1.43098L6.07727 1.9043ZM10.4977 8.57071C11.0798 8.57071 11.6404 8.47425 12.1638 8.29605L11.8415 7.34942C11.4205 7.49275 10.9688 7.57071 10.4977 7.57071V8.57071ZM5.33105 3.40404C5.33105 6.25751 7.64425 8.57071 10.4977 8.57071V7.57071C8.19654 7.57071 6.33105 5.70523 6.33105 3.40404H5.33105ZM5.60376 1.7437C5.42681 2.26544 5.33105 2.82408 5.33105 3.40404H6.33105C6.33105 2.93473 6.40845 2.48453 6.55078 2.06489L5.60376 1.7437ZM5.91611 1.43098C3.88077 2.12398 2.41553 4.05172 2.41553 6.32299H3.41553C3.41553 4.49272 4.59593 2.93685 6.23843 2.37761L5.91611 1.43098ZM2.41553 6.32299C2.41553 9.17646 4.72872 11.4897 7.58219 11.4897V10.4897C5.28101 10.4897 3.41553 8.62418 3.41553 6.32299H2.41553ZM7.58219 11.4897C9.85559 11.4897 11.7848 10.0217 12.4762 7.98333L11.5291 7.66214C10.9712 9.30703 9.41418 10.4897 7.58219 10.4897V11.4897Z"
                fill="white"
                fillOpacity="0.6"
              />
            </svg>
            <svg
              className="nav__icon nav__icon_sun"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
                stroke="#243E4C"
              />
              <path d="M6 2.5V1.5" stroke="#243E4C" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 10.5V9.5" stroke="#243E4C" stroke-linecap="round" stroke-linejoin="round" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 6H1H2.5Z"
                stroke="#243E4C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 6H9.5H11Z"
                stroke="#243E4C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.47485 3.5255L9.53551 2.46484L8.47485 3.5255Z"
                stroke="#243E4C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.46436 9.53527L3.52502 8.47461L2.46436 9.53527Z"
                stroke="#243E4C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.47485 8.47461L9.53551 9.53527L8.47485 8.47461Z"
                stroke="#243E4C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.46436 2.46484L3.52502 3.5255L2.46436 2.46484Z"
                stroke="#243E4C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </div>
        <a className="nav__link" onClick={handleSignUp}>
          Sign up
        </a>
      </nav>
    </div>
  );
};

export default NavPanel;
