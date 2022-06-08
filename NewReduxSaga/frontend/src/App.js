import React, { Suspense,lazy } from "react";
import "./App.css";
import Hoc1 from "./HigherOrderComp/Hoc1";
import Hoc2 from "./HigherOrderComp/Hoc2";
import Hoc3 from "./HigherOrderComp/Hoc3";
import Hoc4 from "./HigherOrderComp/Hoc4";
import {
  RenderProps,
  RenderPropsChildren,
  RenderPropsFunc,
} from "./RenderProps/RenderProps";
import RND2 from "./renderPropsComp/RND2";
import RND1 from "./renderPropsComp/RND1";
import RND3 from "./renderPropsComp/RND3";
import Counter from "./Components/Counter/Counter";
import Counter1 from "./Components/Counter/Counter1";

const LazyComponent = lazy(() => import("./LazyComponent/LazyComponent"));
function App() {
  return (
    <div className="App">
      <Hoc1 />
      <Hoc2 name="name2" />
      <Hoc3 />
      <Hoc4 name="name4" />

      <br></br>
      <br></br>
      <br></br>
      <RenderProps
        counter={(count, updateCount) => (
          <RND1 count={count} updateCount={updateCount} />
        )}
      />
      <RenderProps
        counter={(count, updateCount) => (
          <RND2 count={count} updateCount={updateCount} />
        )}
      />
      <RenderPropsChildren>
        {(count, updateCount) => (
          <RND3 count={count} updateCount={updateCount} />
        )}
      </RenderPropsChildren>

      <RenderPropsFunc>
        {(count, updateCount) => (
          <RND2 count={count} updateCount={updateCount} />
        )}
      </RenderPropsFunc>

      <br></br>
      <br></br>
      <br></br>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent/>
      </Suspense>

      <br></br>
      <br></br>
      <br></br>
      {/* <Counter/> */}
      <Counter1/>
    </div>
  );
}

export default App;
