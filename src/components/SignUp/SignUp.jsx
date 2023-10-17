import React, { useContext, useState } from 'react';
import ThemeContext from '../../utils/themeContext';
import './SignUp.scss';

const SignUp = ({ signUpRef }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfError, setPasswordConfError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (age >= 150) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (!/^[a-zA-Z0-9@$._-]{3,20}$/.test(username)) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    // + checking on existing username
    if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (password !== passwordConf) {
      setPasswordConfError(true);
    } else {
      setPasswordConfError(false);
    }
  };

  return (
    <div className="container">
      <div ref={signUpRef} className={`signup ${theme}`}>
        <h3 className="signup__title">Sign up</h3>
        <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="form__item">
            <input
              id="first-name"
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="first-name" className="form__label">
              First name
            </label>
          </div>
          <div className="form__item">
            <input
              id="last-name"
              className="form__input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="last-name" className="form__label">
              Last name
            </label>
          </div>
          <div className="form__item">
            <input
              id="age"
              className={ageError ? 'form__input invalid' : 'form__input'}
              maxLength="3"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="age" className="form__label">
              Age
            </label>
            <span className={ageError ? 'form__error' : 'hidden'}>Enter the correct age</span>
          </div>
          <div className="form__item">
            <input
              id="username"
              className={usernameError ? 'form__input invalid' : 'form__input'}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="username" className="form__label">
              Username
            </label>
            <span className={usernameError ? 'form__error' : 'hidden'}>
              The username must contain from 3 to 20 characters, including Latin letters, digits and symbols ._-@$
            </span>
          </div>
          <div className="form__item">
            <input
              id="password"
              className={passwordError ? 'form__input invalid' : 'form__input'}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <span className={showPassword ? 'hidden' : 'form__eye'} onClick={() => setShowPassword(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon/eye">
                  <path
                    id="Ellipse"
                    d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                    stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                    strokeLinecap="round"
                  />
                  <circle
                    id="Ellipse 2"
                    cx="12"
                    cy="12"
                    r="3"
                    stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector"
                    d="M3 21L20 4"
                    stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </span>
            <span className={showPassword ? 'form__eye' : 'hidden'} onClick={() => setShowPassword(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                  stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className={passwordError ? 'form__error' : 'hidden'}>
              The password must contain at least 8 characters and include at least 1 lowercase and 1 uppercase Latin
              letter, 1 digit and 1 special character (!@#$&*)
            </span>
          </div>
          <div className="form__item">
            <input
              id="password-conf"
              className={passwordConfError ? 'form__input invalid' : 'form__input'}
              type={showPasswordConf ? 'text' : 'password'}
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="password-conf" className="form__label">
              Password confirmation
            </label>
            <span className={showPasswordConf ? 'hidden' : 'form__eye'} onClick={() => setShowPasswordConf(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon/eye">
                  <path
                    id="Ellipse"
                    d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                    stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                    strokeLinecap="round"
                  />
                  <circle
                    id="Ellipse 2"
                    cx="12"
                    cy="12"
                    r="3"
                    stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector"
                    d="M3 21L20 4"
                    stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </span>
            <span className={showPasswordConf ? 'form__eye' : 'hidden'} onClick={() => setShowPasswordConf(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                  stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke={theme === 'light' ? '#B2B2B2' : '#1A2C37'}
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className={passwordConfError ? 'form__error' : 'hidden'}>The entered passwords don't match</span>
          </div>
          <p className="form__privacy">By clicking Create Account, you agree on our Privacy Policy</p>
          <button
            type="submit"
            className={
              firstName && lastName && age && username && password && passwordConf
                ? 'form__btn btn solid-button'
                : 'form__btn btn transparent-button'
            }
          >
            Create Account
          </button>
        </form>
        <div className="socials">
          <button className="socials__btn">f</button>
          <button className="socials__btn">G+</button>
          <button className="socials__btn">in</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
