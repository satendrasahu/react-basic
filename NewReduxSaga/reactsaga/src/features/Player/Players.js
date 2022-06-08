import React from "react";
import "./player.css";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player/lazy";
const Players = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        // controls
        volume
        url="https://www.youtube.com/watch?v=UpSK6UvkMIU&list=RDUpSK6UvkMIU&start_radio=1"
        // url={[
        //   "https://www.youtube.com/watch?v=oUFJJNQGwhk",
        //   "https://www.youtube.com/watch?v=jNgP6d9HraI",
        // ]}
        // url={['foo.webm', 'foo.ogg']}
      
        playing
        onReady={() => console.log("video ready")}
        onStart={() => console.log("video start")}
        onPause={() => console.log("video pause")}
        onPlay={() => console.log("video playing")}
        onProgress={() => console.log("video progress")}
        onEnded={() => console.log("video ended")}
        onError={() => console.log("video error")}
        width="50%"
        height="50%"
      />

      {/* <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=UpSK6UvkMIU&list=RDUpSK6UvkMIU&start_radio=1"
        // config={{
        //   youtube: {
        //     playerVars: { showinfo: 1 },
        //   },
        //   facebook: {
        //     appId: "12345",
        //   },
        // }}
      /> */}
    </div>
  );
};

export default Players;
