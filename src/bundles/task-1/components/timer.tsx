import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { Second } from '../enums/enums';
import { formatLog } from '../helpers/format-date';
import { saveLog, clear, addTime } from '../store/slice';
import { seconds } from '../types/types';

let initial = 0;

const Timer = () => {
  const dispatch = useAppDispatch();

  const { logs } = useAppSelector(({ timer }) => timer);

  function sleep(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  const handleClick = async (time: seconds) => {
    initial += time;
    await sleep(initial - time);

    setTimeout(() => {
      initial -= time;
      dispatch(addTime(time));
      dispatch(saveLog(formatLog(time)));
    }, time * 1000);
  };

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
      <ul>
        {logs.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Timer;
