const Letters = ({
  isGameLost,
  word,
  guessLetters,
  lastGuess,
  nbAttemptLeft,
}: {
  isGameLost: boolean;
  word: string;
  guessLetters: string[];
  lastGuess: string;
  nbAttemptLeft: number;
}) => {
  const shouldRevealLetter = (letter: string) => {
    if (guessLetters.includes(letter) || isGameLost) {
      return letter;
    }
    return "";
  };

  const missingLetterClass = (letter: string) => {
    if (isGameLost) {
      return guessLetters.includes(letter) ? "" : "missing-letter";
    }
    return "";
  };

  return (
    <>
      <section className="letter-container">
        {word.split("").map((letter, index) => {
          return (
            <div className="letter-wrapper" key={`${letter}-${index}`}>
              <span className={`letter ${missingLetterClass(letter)}`}>
                {shouldRevealLetter(letter)}
              </span>
            </div>
          );
        })}
      </section>

      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {word.split("").includes(lastGuess)
            ? `Correct ! the word includes the letter ${lastGuess}.`
            : `Sorry, the letter ${lastGuess} is not in the word.`}
        </p>
        <p>There is {nbAttemptLeft} attempts left.</p>
        <p>
          Current word:{" "}
          {word
            .split("")
            .map((letter) =>
              guessLetters.includes(letter) ? letter + "." : "blank"
            )
            .join(" ")}
        </p>
      </section>
    </>
  );
};

export default Letters;
