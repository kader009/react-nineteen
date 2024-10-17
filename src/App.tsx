import { Profiler, useCallback } from "react";
import DataFetching from "./pages/DataFetching";
import Switch from "./pages/Switch";
import Register from "./Account/Register";

const App = () => {
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
    <>
    {/* <Profiler id="switch" onRender={onRenderCallback}>

      <Switch/>
    </Profiler>
      <DataFetching/> */}
      <Register/>
    </>
  );
};

export default App;
