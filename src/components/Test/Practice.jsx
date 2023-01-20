import Button from './components/Buttons/Button';
import PrimaryBtn, { SecondaryBtn, TertiaryBtn } from './components/Buttons/PrimaryBtn';
import Greetings from './components/Greetings/Greetings';
import HorizontalSplit from './components/Layouts/HorizontalSplit';
import LeftSide from './components/Layouts/LeftSide';
import RightSide from './components/Layouts/RightSide';
import useFetch from './components/Hooks/useFetch';

const Practice = () => {
    const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/users');
  const login = true;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Apps">
      <h1>React App</h1>
      {login && <Greetings name="John" className="greetings" id="id-greetings" />}

      {login || <Greetings name={login || 'Guest'} className="greetings" id="id-greetings" />}
      <Button text="Hello Button" className='btn-own' id='btn-id' />
      <PrimaryBtn text="Hello Primary Button" className='btn-own' id='btn-pry' />
      <SecondaryBtn text="Hello Secondary Button" className='scondary-btn' id='btn-sec' />
      <TertiaryBtn text="Hello Tertiary Button" className='tertiary-Btn' id='btn-ter' />

      <HorizontalSplit startSide={<LeftSide />} endSide={<RightSide />} />
    </div>
  );
}

export default Practice;