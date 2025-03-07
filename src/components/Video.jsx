import { useState, useRef } from "react";
import { meal, play } from "../assets/images";
import {BsPauseFill, BsFillPlayFill} from "react-icons/bs"

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

  return (
    // <main className="h-[100vh] relative app__video">
    <main className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {/* <div className="w-full h-full object-cover app__video-overlay flex__center"> */}
      <div className="app__video-overlay flex__center">
        <div
          //   className="app__video-overlay_circle flex__center absolute inset-0 bg-[rgba(0,0,0,0.65)]"
          className="h-full flex items-center justify-center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill
              color="#fff"
              fontSize={30}
              className="text-black bg-[#F3E2D5] rounded-full"
            />
          ) : (
            // <img src={play} alt="" color="#fff" fontSize={30} />
            // <BsFillPlayFill color="#fff" fontSize={30} />
            <img src={play} alt="" color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Video;
