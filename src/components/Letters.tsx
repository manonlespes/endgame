const Letters = ({
  word,
  guessLetters,
}: {
  word: string;
  guessLetters: string[];
}) => {
  return (
    <section className="letter-container">
      {word.split("").map((letter, index) => {
        return (
          <div className="letter-wrapper" key={`${letter}-${index}`}>
            <span className="letter">
              {guessLetters.includes(letter) ? letter : ""}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Letters;
