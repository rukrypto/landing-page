const LanguageSwitcher = ({ onchange, langs }) => {
  return (
    <div>
      {langs?.length > 0 &&
        langs.map((lang) => {
          return <button onClick={() => onchange(lang)}>{lang}</button>;
        })}
    </div>
  );
};
export default LanguageSwitcher;
