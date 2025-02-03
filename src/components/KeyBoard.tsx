const KeyBoard = ({
  alphabet,
  handleSave,
  guessletters,
  word,
}: {
  alphabet: string;
  handleSave: (letter: string) => void;
  guessletters: string[];
  word: string;
}) => {
  const addClass = (letter: string) => {
    const isGuessed = guessletters.includes(letter);
    const hasLetter = word.includes(letter);

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
