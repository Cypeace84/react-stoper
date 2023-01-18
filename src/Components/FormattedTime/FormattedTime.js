// import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (time) => {
    let milliseconds = parseInt((time % 1000) / 1);
    let seconds = parseInt((time / 1000) % 60);
    let minutes = parseInt((time / (1000 * 60)) % 60);
    let hours = parseInt((time / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  };
  console.log('time', time);
  console.log(formatTime);
  return <div>time{formatTime(time)}</div>;
};

export default FormattedTime;

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
