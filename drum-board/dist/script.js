// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const firstSoundsGroup = [
{
  keyCode: 81,
  key: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  key: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  key: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  key: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  key: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  key: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  key: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  key: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  key: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const secondSoundsGroup = [
{
  keyCode: 81,
  key: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },

{
  keyCode: 87,
  key: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

{
  keyCode: 69,
  key: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },

{
  keyCode: 65,
  key: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

{
  keyCode: 83,
  key: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },

{
  keyCode: 68,
  key: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },

{
  keyCode: 90,
  key: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

{
  keyCode: 88,
  key: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },

{
  keyCode: 67,
  key: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }];



const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit" };


const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup };


const KeyboardKey = ({ play, deactivateAudio, sound: { id, key, url, keyCode } }) => {
  const handleKeydown = e => {
    if (keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      play(key, id);
      deactivateAudio(audio);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
  }, []);

  return /*#__PURE__*/(
    React.createElement("button", { value: "test", id: keyCode, className: "drum-pad", onClick: () => play(key, id) }, /*#__PURE__*/
    React.createElement("audio", { className: "clip", src: url, id: key }),
    key));


};

const Keyboard = ({ sounds, play, power, deactivateAudio }) => /*#__PURE__*/
React.createElement("div", { className: "keyboard" },
power ?
sounds.map(sound => /*#__PURE__*/React.createElement(KeyboardKey, { sound: sound, play: play, deactivateAudio: deactivateAudio })) :
sounds.map(sound => /*#__PURE__*/React.createElement(KeyboardKey, { sound: { ...sound, url: "#" }, play: play, deactivateAudio: deactivateAudio })));




const DumControle = ({ stop, name, power, volume, handleVolumeChange, changeSoundGroup }) => /*#__PURE__*/
React.createElement("div", { className: "controle" }, /*#__PURE__*/
React.createElement("button", { onClick: stop }, "Turn Power ", power ? 'OFF' : 'ON'), /*#__PURE__*/
React.createElement("h2", null, "Volume: %", Math.round(volume * 100)), /*#__PURE__*/
React.createElement("input", {
  max: "1",
  min: "0",
  step: "0.01",
  type: "range",
  value: volume,
  onChange: handleVolumeChange }), /*#__PURE__*/

React.createElement("h2", { id: "display" }, name), /*#__PURE__*/
React.createElement("button", { onClick: changeSoundGroup }, "Change Sounds Group"));



const App = () => {
  const [power, setPower] = React.useState(true);
  const [volume, setVolume] = React.useState(1);
  const [soundName, setSoundName] = React.useState("");
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);

  const styleActiveKey = key => {
    key.parentElement.style.backgroundColor = "#000000";
    key.parentElement.style.color = "#ffffff";
  };

  const deActivatedKey = audio => {
    audio.parentElement.style.backgroundColor = "#ffffff";
    audio.parentElement.style.color = "#000000";
  };

  const deactivateAudio = audio => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#ffffff";
      audio.parentElement.style.color = "#000000";
    }, 300);
  };

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    styleActiveKey(audio);
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio);
  };

  const stop = () => {
    setPower(!power);
  };

  const changeSoundGroup = () => {
    setSoundName("");
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  const handleVolumeChange = e => {
    setVolume(e.target.value);
  };

  const setKeyVolume = () => {
    const audioes = sounds.map(sound => document.getElementById(sound.key));
    audioes.forEach(audio => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" },
    setKeyVolume(), /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement(Keyboard, { sounds: sounds, play: play, power: power, deactivateAudio: deactivateAudio }), /*#__PURE__*/
    React.createElement(DumControle, {
      stop: stop,
      power: power,
      volume: volume,
      name: soundName || soundsName[soundType],
      changeSoundGroup: changeSoundGroup,
      handleVolumeChange: handleVolumeChange }))));




};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));