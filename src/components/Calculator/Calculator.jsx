import React, { useContext } from 'react';
import ThemeContext from '../../utils/themeContext';
import './Calculator.scss';

const Calculator = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`calculator-wrap ${theme}`}>
      <div className="container">
        <div className="calculator">
          <h2 className="calculator__title">Find the true cost</h2>
          <p className="calculator__text">
            Make informed financial decisions by using these calculators to determine the true cost and display the
            results over time, both numerically and visually.
          </p>
          <button className="calculator__btn btn solid-button">Try it now</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
