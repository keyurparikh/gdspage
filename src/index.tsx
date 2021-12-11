import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
import './index.scss';
import LandingPage from './pages/landing-page';
import { initAll } from 'govuk-frontend';
import Header from './atoms/header';
import WidthContainer from './atoms/containers/width-container';
import PhaseBanner from './atoms/phase-banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StepByStep from './pages/step-by-step';
import Footer from './atoms/footer';
import Cookie from './atoms/cookie-banner';
import { CookiesProvider } from 'react-cookie';
import CookiesPage from './pages/cookies-page';

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Cookie></Cookie>
      <a href="#main-content" className="govuk-skip-link">
        Skip to main content
      </a>
      <Header>Standards as a service</Header>

      <WidthContainer>
        <PhaseBanner phase="experimental">
          This is a new service – your{' '}
          <a className="govuk-link govuk-link--no-visited-state" href="/#">
            feedback
          </a>{' '}
          will help us to improve it.
        </PhaseBanner>
      </WidthContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/step-by-step" element={<StepByStep />}></Route>
          <Route path="/cookies" element={<CookiesPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);
// reportWebVitals(console.log);
initAll();
