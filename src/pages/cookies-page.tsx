import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  getAnalyticsCookiePolicy,
  setAnalyticsCookiePolicy,
} from '../utils/cookies';
import EventBus from '../utils/event-bus';

const CookiesPage: React.FC = () => {
  const [gaConsent, setGaConsent] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [cookies, removeCookies] = useCookies();
  useEffect(() => {
    document.title = 'MOD Digital Standards Cookies';
    let analyticsOn = getAnalyticsCookiePolicy(cookies);
    if (analyticsOn) {
      setGaConsent(analyticsOn.analytics ? 'on' : 'off');
    }
  }, []);

  const submitConsent = (e: React.MouseEvent) => {
    e.preventDefault();

    if (gaConsent === 'on') {
      setAnalyticsCookiePolicy(true);
    } else {
      if (!!cookies._ga) {
        removeCookies('_ga', null, {
          domain: window.location.hostname,
          path: '/',
        });
      }
      if (!!cookies._gid) {
        removeCookies('_gid', null, {
          domain: window.location.hostname,
          path: '/',
        });
      }
      if (!!cookies._gat) {
        removeCookies('_gat', null, {
          domain: window.location.hostname,
          path: '/',
        });
      }
      setAnalyticsCookiePolicy(false);
    }
    setSubmitted(true);
    EventBus.dispatch('cookie-banner', { hide: true });
  };

  return (
    <main
      className="govuk-main-wrapper govuk-width-container govuk-!-padding-top-2 govuk-!-padding-bottom-12"
      id="main-content"
      role="main"
    >
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <div
            role="alert"
            aria-labelledby="govuk-notification-banner-title"
            data-module="govuk-notification-banner"
            className="govuk-notification-banner govuk-notification-banner--success js-cookies-page-success"
            data-cookie-confirmation="true"
            hidden={!submitted}
          >
            <div className="govuk-notification-banner__header">
              <h2
                className="govuk-notification-banner__title"
                id="govuk-notification-banner-title"
              >
                Success
              </h2>
            </div>
            <div className="govuk-notification-banner__content">
              <p className="govuk-notification-banner__heading">
                You’ve set your cookie preferences.
              </p>
              <p>
                <a
                  href="/"
                  className="govuk_link govuk-!-margin-top-1"
                  data-module="track-click"
                  data-track-category="cookieSettings"
                  data-track-action="Back to previous page"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                  }}
                >
                  Go back to the page you were looking at
                </a>
              </p>
            </div>
          </div>
          <h1 className="heading-large">Cookies</h1>
          <p className="summary">
            Cookies are small files saved on your phone, tablet or computer when
            you visit a website.
          </p>
          <p className="govuk-body">
            We use cookies to make MOD Digital Standards work and collect
            information about how you use our service.
          </p>

          <h2 className="heading-medium">Essential cookies</h2>
          <p className="govuk-body">
            Essential cookies keep your information secure while you use MOD
            Digital Standards. We do not need to ask permission to use them.
          </p>
          <table className="govuk-table">
            <caption className="govuk-visually-hidden">
              Essential cookies
            </caption>
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th className="govuk-table__header">Name</th>
                <th className="govuk-table__header">Purpose</th>
                <th className="govuk-table__header">Expires</th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
                <td className="govuk-table__header">
                  mod_digital_standards_cookies_policy
                </td>
                <td className="govuk-table__cell">
                  Saves your cookie consent settings
                </td>
                <td className="govuk-table__cell">1 year</td>
              </tr>
            </tbody>
          </table>

          <h2 className="heading-medium">Analytics cookies (optional)</h2>
          <p className="govuk-body">
            With your permission, we use Google Analytics to collect data about
            how you use MOD Digital Standards. This information helps us to
            improve our service.
          </p>
          <p className="govuk-body">
            Google is not allowed to use or share our analytics data with
            anyone.
          </p>
          <p className="govuk-body">
            Google Analytics stores anonymised information about:
          </p>
          <ul className="govuk-list govuk-list--bullet">
            <li>how you got to MOD Digital Standards</li>
            <li>
              the pages you visit on MOD Digital Standards and how long you
              spend on them
            </li>
            <li>any errors you see while using MOD Digital Standards</li>
          </ul>
          <table className="govuk-table">
            <caption className="govuk-visually-hidden">
              Google Analytics cookies
            </caption>
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th className="govuk-table__header">Name</th>
                <th className="govuk-table__header">Purpose</th>
                <th className="govuk-table__header">Expires</th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
                <td className="govuk-table__header">_ga</td>
                <td className="govuk-table__cell">
                  These help us count how many people visit MOD Digital
                  Standards by tracking if you’ve visited before
                </td>
                <td className="govuk-table__cell">2 years</td>
              </tr>
              <tr className="govuk-table__row">
                <td className="govuk-table__header">_gid</td>
                <td className="govuk-table__cell">
                  These help us count how many people visit MOD Digital
                  Standards by tracking if you’ve visited before
                </td>
                <td className="govuk-table__cell">24 hours</td>
              </tr>
              <tr className="govuk-table__row">
                <td className="govuk-table__header">_gat</td>
                <td className="govuk-table__cell">
                  Use to reduce the number of requests.
                </td>
                <td className="govuk-table__cell">1 minute</td>
              </tr>
            </tbody>
          </table>
          <div className="govuk-form-group">
            <div className="govuk-form-group govuk-!-margin-top-6">
              <fieldset
                className="govuk-fieldset"
                aria-describedby="changed-name-hint"
              >
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
                  Do you want to accept analytics cookies?
                </legend>
                <div className="govuk-radios govuk-radios--inline">
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="cookies-analytics-yes"
                      name="cookies-analytics"
                      type="radio"
                      value="on"
                      checked={gaConsent === 'on'}
                      onChange={() => {
                        setGaConsent('on');
                      }}
                    />
                    <label className="govuk-label govuk-radios__label">
                      Yes
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="cookies-analytics-no"
                      name="cookies-analytics"
                      type="radio"
                      value="off"
                      checked={gaConsent === 'off'}
                      onChange={() => {
                        setGaConsent('off');
                      }}
                    />
                    <label className="govuk-label govuk-radios__label">
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <button
              className="govuk-button"
              type="submit"
              onClick={submitConsent}
            >
              Save cookie settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CookiesPage;
