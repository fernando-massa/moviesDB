import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';


export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      {/* <img src="" alt="moviesDB" className="vslogo" /> */}
      <h1>moviesDB</h1>
      <div className="flex-ctr-ctr vauth-square">
        {showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
      </div>
      <button className="sign-butt" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In!' : 'Sign Up!'}</button>
    </main>
  );
}