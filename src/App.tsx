import { useState } from "react";
import "./App.css";
import Languages from "./components/Languages";
import Notice from "./components/Notice";
import Letters from "./components/Letters";
import KeyBoard from "./components/KeyBoard";
import { languages } from "./assets/language";
import { getFarewellText, getNewWord } from "./assets/utils";
import ReactConfetti from "react-confetti";

function App() {
  const [currentWord, setCurrentWord] = useState<string>(() => getNewWord());
  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const letterSaved = (letter: string) => {
    setGuessLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  };

  const wrongGuessCount = guessLetters.filter(
    (letter) => !currentWord.split("").includes(letter)
  ).length;
  const isGameLost = wrongGuessCount === languages.length - 1;
  const isGameWon = currentWord.split("").every((letter) => {
    return guessLetters.includes(letter);
  });
  const nbAttemptLeft = languages.length - 1 - wrongGuessCount;
  const isGameOver = isGameWon || isGameLost;
  const isLastGuessed = guessLetters[guessLetters.length - 1];
  const isWrongGuessed = !currentWord.split("").includes(isLastGuessed);
  const noticeClass = isGameOver
    ? isGameWon
      ? "won"
      : "lost"
    : isWrongGuessed && wrongGuessCount > 0
    ? "farewell"
    : "";

  const renderGameStatus = () => {
    if (!isGameOver && isWrongGuessed && wrongGuessCount > 0) {
      return <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>;
    }
    if (isGameWon)
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );

    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }

    return null;
  };

  const handleNewGame = () => {
    setCurrentWord(getNewWord());
    setGuessLetters([]);
  };

  return (
    <>
      {isGameWon && <ReactConfetti />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p className="instructions">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <main>
        <Notice noticeClass={noticeClass} message={renderGameStatus()} />
        <Languages wrongGuessCount={wrongGuessCount} />
        <Letters
          isGameLost={isGameLost}
          word={currentWord}
          guessLetters={guessLetters}
          lastGuess={isLastGuessed}
          nbAttemptLeft={nbAttemptLeft}
        />
        <KeyBoard
          alphabet={alphabet}
          handleSave={letterSaved}
          guessLetters={guessLetters}
          word={currentWord}
          disableKeyBoard={isGameOver}
        />
        {isGameOver && (
          <button onClick={handleNewGame} className="new-game">
            New game
          </button>
        )}
      </main>
    </>
  );
}

export default App;
