import React, {useEffect} from 'react';
import ArtistsList from "./pages/artistsList";
import Artist from "./pages/artist";
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/footer";
import FullHeader from "./components/FullHeader";
import PageAbout from "./pages/PageAbout";
import {I18nextProvider} from "react-i18next";
import i18next from './i18n';
import Scroller from './components/Scroller';

function App() {
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18next.changeLanguage(savedLanguage);
        }
    }, []);

  return (
      <I18nextProvider i18n={i18next}>
      <div className= "main">
          <FullHeader/>
          <Router>
              <Scroller/>
              <Routes>
                  <Route path="/" element={<PageAbout/>} />
                  <Route path="/artist/:id" element={<Artist />} />
                  <Route path="/artistsList/:id" element={<ArtistsList />} />
                  <Route path="/artistsList" element={<ArtistsList />} />
              </Routes>
          </Router>
          {/*<ArtistsList/>*/}

          <Footer/>
      </div>
      </I18nextProvider>
  );
}
export default App;
