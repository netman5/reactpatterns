import './App.css';
import Button from './components/Buttons/Button';
import PrimaryBtn, { SecondaryBtn, TertiaryBtn } from './components/Buttons/PrimaryBtn';
import Greetings from './components/Greetings/Greetings';

function App() {
  const login = true;
  return (
    <div className="Apps">
      <h1>React App</h1>
      {login && <Greetings name="John" className="greetings" id="id-greetings" />}

      {login || <Greetings name={login || 'Guest'} className="greetings" id="id-greetings" />}
      <Button text="Hello Button" className='btn-own' id='btn-id' />
      <PrimaryBtn text="Hello Primary Button" className='btn-own' id='btn-pry' />
      <SecondaryBtn text="Hello Secondary Button" className='scondary-btn' id='btn-sec' />
      <TertiaryBtn text="Hello Tertiary Button" className='tertiary-Btn' id='btn-ter' />
    </div>
  );
}

export default App;
