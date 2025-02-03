import { useState } from "react";
import "./App.css";
import Languages from "./components/Languages";
import Notice from "./components/Notice";
import Letters from "./components/Letters";
import KeyBoard from "./components/KeyBoard";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const letterSaved = (letter: string) => {
    setGuessLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  };

  return (
    <>
      <header>
        <h1>Assembly: Endgame</h1>
        <p className="instructions">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <main>
        <Notice />
        <Languages />
        <Letters word={currentWord} guessLetters={guessLetters} />
        <KeyBoard
          alphabet={alphabet}
          handleSave={letterSaved}
          guessLetters={guessLetters}
          word={currentWord}
        />
      </main>
    </>
  );
}

export default App;
