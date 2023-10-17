import React, { useRef } from 'react';
import NavPanel from '../NavPanel/NavPanel';
import Presentation from '../Presentation/Presentation';
import Description from '../Description/Description';
import Start from '../Start/Start';
import Price from '../Price/Price';
import SignUp from '../SignUp/SignUp';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import './Landing.scss';

const Landing = () => {
  const signUpRef = useRef(null);

  const handleSignUp = () => {
    signUpRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavPanel handleSignUp={handleSignUp} />
      <Presentation handleSignUp={handleSignUp} />
      <Description />
      <Start handleSignUp={handleSignUp} />
      <Price handleSignUp={handleSignUp} />
      <SignUp signUpRef={signUpRef} />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Landing;
