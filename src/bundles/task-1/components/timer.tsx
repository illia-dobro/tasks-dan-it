const Timer = () => {
  return (
    <>
      <h1 className="p-4 text-xl">Task 1</h1>
      <div className="flex gap-4 justify-center mt-4">
        <button className="btn btn-outline">1 sec</button>
        <button className="btn btn-outline">2 sec</button>
        <button className="btn btn-outline">3 sec</button>
        <button className="btn btn-primary">Clear</button>
      </div>
    </>
  );
};

export default Timer;
