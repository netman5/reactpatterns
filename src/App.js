import './App.css';
import Button from './components/Buttons/Button';
import Greetings from './components/Greetings/Greetings';

function App() {
  return (
    <div className="Apps">
      <h1>React App</h1>
      <Greetings name="John" className="greetings" id="id-greetings" />
      <Button text="Hello Button" className='btn-own' id='btn-id' />
    </div>
  );
}

export default App;
