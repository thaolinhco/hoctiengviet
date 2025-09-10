import "./App.css";
import { useTranslation } from "react-i18next";

import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from "./Layout";

function LanguageApp() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <h1>{t('studyVietnamese')}</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/:lang" element={<Layout><LanguageApp /></Layout>} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
