import React from 'react';

import Song from './Song';
import Play from './Play';
import Pause from './Pause';
import Bar from './Bar';

import useAudioPlayer from './useAudioPlayer';

function Audio(props) {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const { linkAudio } = props;
console.log("linkAudio", linkAudio);
  return (
    <div className="player">
      <audio id="audio" src={linkAudio} type="audio/wav">
      </audio>
      <div className="controls">
        {playing ? <Pause handleClick={() => setPlaying(false)} /> : <Play handleClick={() => setPlaying(true)} />}
        <Bar curTime={curTime} duration={duration} onTimeUpdate={time => setClickedTime(time)} />
      </div>
    </div>
  );
}

export default Audio;
