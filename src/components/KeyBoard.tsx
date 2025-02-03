const KeyBoard = ({
  alphabet,
  handleSave,
  guessLetters,
  word,
}: {
  alphabet: string;
  handleSave: (letter: string) => void;
  guessLetters: string[];
  word: string;
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
            className={`key ${addClass(letter)}`}
            key={`${letter}-${index}`}
            onClick={() => handleSave(letter)}
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
};

export default KeyBoard;
