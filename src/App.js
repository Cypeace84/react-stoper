import { useState } from 'react';
import Button from './Components/Button/Button';
import FormattedTime from './Components/FormattedTime/FormattedTime';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();

  // const timer = (time) => {
  //   setTime((prevValue) => prevValue + 1);
  // };

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };
  const startStoper = (e) => {
    e.preventDefault();
    start();

    console.log('klik');
    console.log(time, setTime);
    console.log('timery', timer, setTimer);
  };

  const stop = (e) => {
    e.preventDefault();
    clearInterval(timer);
  };

  const reset = (e) => {
    e.preventDefault();
    clearInterval(timer);
    setTime(0);
  };
  return (
    <div>
      <FormattedTime time={time} />
      <button onClick={startStoper}>START</button>
      {/* <Button onClick={startStoper}>Start</Button> */}
      <button onClick={stop}>STOP</button>
      {/* <Button onClick={stop}>Stop</Button> */}
      <button onClick={reset}>RESET</button>
      {/* <Button>Reset</Button> */}
    </div>
  );
};

export default App;
