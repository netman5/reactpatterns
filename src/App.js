import './App.css';
import Button from './components/Buttons/Button';
import PrimaryBtn from './components/Buttons/PrimaryBtn';
import Greetings from './components/Greetings/Greetings';

function App() {
  const login = true;
  return (
    <div className="Apps">
      <h1>React App</h1>
      {login && <Greetings name="John" className="greetings" id="id-greetings" />}

      {login || <Greetings name={login || 'Guest'} className="greetings" id="id-greetings" />}
      <Button text="Hello Button" className='btn-own' id='btn-id' />
      <PrimaryBtn text="Hello Primary Button" id='btn-pry' primary />
      <PrimaryBtn text="Hello Primary Button" className='scondary-btn' id='btn-pry' primary={false} />
    </div>
  );
}

export default App;
