import { languages } from "../assets/language";

const Languages = ({ wrongGuessCount }: { wrongGuessCount: number }) => {
  return (
    <>
      <section className="languages-container">
        <ul>
          {languages.map((lang, index: number) => {
            return (
              <li
                key={index}
                className={`${index < wrongGuessCount ? "lost" : ""}`}
                style={{
                  backgroundColor: `${lang.backgroundColor}`,
                  color: `${lang.color}`,
                }}
              >
                {lang.name}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Languages;
