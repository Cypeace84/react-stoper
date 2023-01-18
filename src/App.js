import { useState } from 'react';
import Button from './Components/Button/Button';
import FormattedTime from './Components/FormattedTime/FormattedTime';

const App = () => {
  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(null);

  console.log(time, setTime);
  console.log(interval, setInterval);
  return (
    <div>
      <FormattedTime time={time} />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </div>
  );
};

export default App;

// function msToTime(duration) {
//   var milliseconds = parseInt((duration%1000)/10)
//       , seconds = parseInt((duration/1000)%60)
//       , minutes = parseInt((duration/(1000*60))%60)
//       , hours = parseInt((duration/(1000*60*60))%24);

//   hours = (hours < 10) ? "0" + hours : hours;
//   minutes = (minutes < 10) ? "0" + minutes : minutes;
//   seconds = (seconds < 10) ? "0" + seconds : seconds;

//   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }
