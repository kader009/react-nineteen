import { useCallback, useEffect, useState } from 'react';

const DataFetching = () => {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    console.log('I am loggin..');
  }, []);

  const increment = useCallback(() => {
    SetCount(count + 1);
    SetCount(count + 1);
  }, [count]);
  return (
    <div className="text-center">
      {count}
      <button
        className="bg-black px-2 py-1 text-white rounded"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};

export default DataFetching;
