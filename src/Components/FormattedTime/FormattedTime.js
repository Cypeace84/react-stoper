import styles from './FormattedTime.module.scss';

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
      hours = '00';
    }
    console.log('hour', hours);
    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  };
  console.log('time', time);

  return <div className={styles.component}>{formatTime(time)}</div>;
};

export default FormattedTime;
