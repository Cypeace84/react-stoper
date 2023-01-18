// import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (time) => {
    let milliseconds = parseInt((time % 1000) / 1),
      seconds = parseInt((time / 1000) % 60),
      minutes = parseInt((time / (1000 * 60)) % 60),
      hours = parseInt((time / (1000 * 60 * 60)) % 24);
    console.log('milliseconds', milliseconds);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (time < 5) {
      hours = 0;
    }

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  };
  console.log('time', time);

  console.log('formatTime', formatTime(4));
  return <div>time{formatTime(time)}</div>;
};

export default FormattedTime;

// function msToTime(time) {
//   let milliseconds = parseInt((time%1000)/1)

//       , seconds = parseInt((time/1000)%60)
//       , minutes = parseInt((time/(1000*60))%60)
//       , hours = parseInt((time/(1000*60*60))%24);
//       console.log('milliseconds', milliseconds);
//   hours = (hours < 10) ? "0" + hours : hours;
//   minutes = (minutes < 10) ? "0" + minutes : minutes;
//   seconds = (seconds < 10) ? "0" + seconds : seconds;
//   if (time < 5){
//     hours = 0;
//   };

//   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }

// console.log(msToTime(9000));

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
