import { Profiler, useCallback, useEffect, useState } from 'react';

const DataFetching = () => {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    console.log('I am loggin..');
  }, []);

  useCallback(() => {}, []);

  const increment = useCallback(() => {
    SetCount(count + 1);
    SetCount(count + 1);
  }, [count]);

  const onRenderCallback = useCallback(
    (
      id: string,
      phase: 'mount' | 'update' | 'nested-update',
      actualDuration: number,
      baseDuration: number,
      startTime: number,
      commitTime: number
    ) => {
      console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
      });
    },
    []
  );

  return (
    <Profiler id="dataFetching" onRender={onRenderCallback}>
      <div className="text-center">
        {count}
        <button
          className="bg-black px-2 py-1 text-white rounded"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </Profiler>
  );
};

export default DataFetching;
