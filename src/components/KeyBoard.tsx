const KeyBoard = ({
  alphabet,
  handleSave,
  guessLetters,
  word,
  disableKeyBoard,
}: {
  alphabet: string;
  handleSave: (letter: string) => void;
  guessLetters: string[];
  word: string;
  disableKeyBoard: boolean;
}) => {
  const addClass = (letter: string) => {
    const isGuessed = guessLetters.includes(letter);
    const hasLetter = word.split("").includes(letter);

    if (isGuessed && hasLetter) return "green";
    if (isGuessed && !hasLetter) return "red";

    return "";
  };

  return (
    <section className="keyboard-container">
      {alphabet.split("").map((letter, index) => {
        return (
          <button
            className={`key ${addClass(letter)} ${
              disableKeyBoard ? "disabled" : ""
            }`}
            key={`${letter}-${index}`}
            onClick={() => handleSave(letter)}
            disabled={disableKeyBoard}
            aria-disabled={guessLetters.includes(letter)}
          >
            <span className="sr-only">Letter</span>
            {letter}
          </button>
        );
      })}
    </section>
  );
};

export default KeyBoard;
