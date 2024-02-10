import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Are you positive???",
  "Pookie please",
  "Just think about it",
  "If you say no, I'll be very sad",
  "I'll be very very sad",
  "I'll be very very very sad",
  "I'll be very very very very sad",
  "Ok fine, I'll stop asking...",
  "Just kidding, PLEASE SAY YES",
  "I'll be very very very very very sad",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />

          <div className="padding">Will you be my Valentine?</div>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center">
            <button
              className="yesButton hover:yesButton text-white font-bold py-2 px-4 rounded"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="noButton hover:noButton text-white font-bold py-2 px-4 rounded"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
