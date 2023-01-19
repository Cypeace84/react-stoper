import { useState } from 'react';
import Button from './Components/Button/Button';
import Container from './Components/Container/Container';
import FormattedTime from './Components/FormattedTime/FormattedTime';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();

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
    console.log('timer', timer);
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
    <Container>
      <FormattedTime time={time} />
      {/* <button onClick={startStoper}>START</button> */}
      <Button onClick={startStoper}>START</Button>
      {/* <button onClick={stop}>STOP</button> */}
      <Button onClick={stop}>STOP</Button>
      {/* <button onClick={reset}>RESET</button> */}
      <Button onClick={reset}>RESET</Button>
    </Container>
  );
};

export default App;
