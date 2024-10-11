import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const App = () => {
  const { t, i18n } = useTranslation();
  const [number, setNumber] = useState(1);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('title')}</h1>
      <button onClick={() => handleLanguageChange('en')}>{t('english')}</button>
      <button onClick={() => handleLanguageChange('ru')}>{t('russian')}</button>

      <div>
        <button onClick={() => setNumber(1)}>{t('factorial', { number: 1 })}</button>
        <FactorialCalculator number={number} />
      </div>
      <div>
        <button onClick={() => setNumber(5)}>{t('factorial', { number: 5 })}</button>
        <FactorialCalculator number={number} />
      </div>
      <div>
        <button onClick={() => setNumber(10)}>{t('factorial', { number: 10 })}</button>
        <FactorialCalculator number={number} />
      </div>
      <div>
        <button onClick={() => setNumber(20)}>{t('factorial', { number: 20 })}</button>
        <FactorialCalculator number={number} />
      </div>
    </div>
  );
};
// END

export default App;
