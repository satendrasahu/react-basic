import React from "react";
import { Media, Player } from "react-media-player";
import Counter from "./features/counter/Counter";
import HOC from "./features/HOC/HOC";
import HOC1 from "./features/HOC/HOC1";
import HOC2 from "./features/HOC/HOC2";
import MediaPlayer from "./features/Player/MediaPlayer";
import Players from "./features/Player/Players";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Players /> */}
      <HOC1 MyName="props1" />
      <HOC2 />

      {/* <Media>
            <MediaPlayer />
            <Player src="https://www.youtube.com/watch?v=UpSK6UvkMIU&list=RDUpSK6UvkMIU&start_radio=1" />
          </Media> */}
    </div>
  );
};

export default App;
