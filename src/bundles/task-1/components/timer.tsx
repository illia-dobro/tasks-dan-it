import { useAppSelector, useAppDispatch } from '../../common/hooks/hooks';
import { incrementByAmount } from '../store/slice';
import { Second } from '../enums/enums';
import { ValueOf } from '../../types/types';

type seconds = ValueOf<typeof Second>

const Timer = () => {
  const dispatch = useAppDispatch();

  // const st = useAppSelector(({timer}) => timer)
  // console.log( st);
  const handleClick = (numberSeconds: seconds ) => {
    dispatch(incrementByAmount(numberSeconds));
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
        <button className="btn btn-primary">Clear</button>
      </div>
    </>
  );
};

export default Timer;
