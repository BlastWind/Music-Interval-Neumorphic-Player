import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IntervalPlayer from "./IntervalPlayer.jsx";
import { JawsTheme, PinkPanther, ForElise } from "./songs";
import intervalPlayerJSON from "./intervalPlayerData.js";
import { Howl, Howler } from "howler";

function App() {
  const intervalPlayerData = intervalPlayerJSON;
  const [elRefs, setElRefs] = React.useState([]);
  React.useEffect(() => {
    setElRefs((elRefs) =>
      Array(intervalPlayerData.length)
        .fill()
        .map((_, i) => elRefs[i] || React.createRef())
    );
  }, [intervalPlayerData.length]);

  const [sound, setSound] = React.useState([]);

  const playSound = (song) => {
    var newSound = new Howl({
      src: [song.file],
      volume: 0.5,
      onend: function () {
        for (var i = 0; i < elRefs.length; i++) {
          elRefs[i].current.pausePlayer();
        }
      },
    });

    setSound(newSound);
    if (sound.length !== 0) {
      sound.pause();
    }

    newSound.play();
  };

  const pauseSound = () => {
    if (sound.length !== 0) {
      sound.stop();
    }
  };

  const pauseAllOtherPlayers = (a) => {
    intervalPlayerData.map((x, i) => {
      if (a !== i) {
        elRefs[i].current.pausePlayer();
      }
    });
  };

  return (
    <div className="App">
      <div className="metaContainer">
        <div>
          <div className="AppTitle">These Intervals... Quite Catchy</div>
          <div className="AppNote">
            The first non unison interval in each clip matches the corresponding
            interval name
          </div>
        </div>
      </div>
      <div className="intervalPlayerContainer">
        {intervalPlayerData.map((eachInterval, i) => {
          return (
            <IntervalPlayer
              ref={elRefs[i]}
              pauseAllOtherPlayers={pauseAllOtherPlayers}
              index={i}
              data={eachInterval}
              playSound={(songIndex) => {
                playSound(eachInterval.songs[songIndex]);
              }}
              pauseSound={pauseSound}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
