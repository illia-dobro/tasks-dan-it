import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { saveLog, clear } from '../store/slice';
import { Second } from '../enums/enums';
import { ValueOf } from '../../types/types';

type seconds = ValueOf<typeof Second>;

let initial = 0


const Timer = () => {
  const dispatch = useAppDispatch();

  const st = useAppSelector(({timer}) => timer.log)
  console.log( st);


  const formatLog = (time: seconds) => {
    const now = new Date();
    const dateNow = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    const dateWhenTimerStart = now.getHours() + ':' + now.getMinutes() + ':' + (now.getSeconds() - time);

    return `№${time} ${dateNow} ${dateWhenTimerStart} (${time} sec)`
  }

  function sleep(seconds: number ) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}


  const handleClick = async (time: seconds) => {
      await sleep(initial);
      initial += time;
      setTimeout(() => {
        initial -= time;
        dispatch(saveLog(formatLog(time)));
        }, time * 1000);
    }

  return (
    <>
      <h1 className="p-4 text-xl">Task 1</h1>
      <div className="flex gap-4 justify-center mt-4">
        <button
          onClick={() => handleClick(Second.ONE)}
          className="btn btn-outline"
        >
          {Second.ONE} sec
        </button>
        <button
          onClick={() => handleClick(Second.TWO)}
          className="btn btn-outline"
        >
          {Second.TWO} sec
        </button>
        <button
          onClick={() => handleClick(Second.THREE)}
          className="btn btn-outline"
        >
          {Second.THREE} sec
        </button>
        <button onClick={() => dispatch(clear())} className="btn btn-primary">
          Clear
        </button>
      </div>
      <ul>{st.map(item => <li key={item}>{item}</li>)}</ul>
    </>
  );
};

export default Timer;
