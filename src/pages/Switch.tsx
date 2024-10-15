import { useState } from 'react';

function useToggle(initialValue: boolean) {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => setState(!state);

  return [state, toggle] as const;
}
const Switch = () => {
  const [isOn, ToggleisOn] = useToggle(false);
  return (
    <div className="text-center">
      <p>The switch is {isOn ? 'On' : 'Off'}</p>
      <button className='bg-black px-2 py-1 rounded text-white' onClick={ToggleisOn}>Toggle</button>
    </div>
  );
};

export default Switch;
