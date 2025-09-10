import "./App.css";
import { useTranslation } from "react-i18next";

import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function LanguageApp() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div>
      <h1>{t('studyVietnamese')}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<LanguageApp />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
