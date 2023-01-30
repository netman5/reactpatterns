import './App.css';
import Practice from './components/Test/Practice';
import CssBaseline from '@mui/material/CssBaseline';
import ClickToIncrease from './components/HOC/ClickToIncrease';
import HoverToIncrease from './components/HOC/HoverToIncrease';

function App() {
  return (
    <>
      <CssBaseline />
      {/* <Practice /> */}
      <ClickToIncrease />
      <HoverToIncrease secretWord={"pineapple"} />
    </>
  )
}

export default App;
