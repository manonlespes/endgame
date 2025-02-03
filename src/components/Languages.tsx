import { languages } from "../assets/language";

const Languages = () => {
  return (
    <>
      <section className="languages-container">
        <ul>
          {languages.map((lang, index: number) => {
            return (
              <li
                key={index}
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
