import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import EventBus from '../../utils/event-bus';

const Cookie = () => {
  const [cookies] = useCookies();
  const [cookiePolicyConfirmation, setCookiePolicyConfirmation] =
    useState<boolean>(false);
  const [displayBanner, setDisplayBanner] = useState<boolean>(true);

  useEffect(() => {
    // cookies
    if (!cookies.mod_digital_standards_cookies_policy) {
      setDisplayBanner(true);
    } else {
      setDisplayBanner(false);
    }
    scrollToTop();
  }, []);

  const closeCookieBanner = useCallback((e) => {
    setDisplayBanner(false);
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    const body = document.querySelector('#root');
    if (body) {
      body.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    EventBus.on('cookie-banner', closeCookieBanner);
    return () => {
      EventBus.remove('cookie-banner', closeCookieBanner);
    };
  }, [closeCookieBanner]);

  const hideCookieBanner = () => {
    EventBus.dispatch('cookie-banner', { hide: true });
  };

  const setCookiePolicy = (accept: boolean) => {
    const yearFromToday = new Date();
    yearFromToday.setFullYear(yearFromToday.getFullYear() + 1);
    document.cookie = `mod_digital_standards_cookies_policy=${JSON.stringify({
      analytics: accept,
      version: 1,
    })};  path='/'; SameSite='strict'; Secure; expires=${yearFromToday.toUTCString()}`;
    setCookiePolicyConfirmation(true);
  };

  if (!displayBanner) {
    return null;
  }

  const cookieForm = (
    <div
      id="mod-standards-cookie-banner"
      className="govuk-cookie-banner "
      data-nosnippet
      role="region"
      aria-label="Cookies on MOD"
    >
      <div className="govuk-cookie-banner__message govuk-width-container">
        <div className="govuk-grid-row">
          <h2 className="govuk-cookie-banner__heading govuk-heading-m">
            Cookies on MOD Digital Standards
          </h2>
          <div className="govuk-cookie-banner__content govuk-body">
            <p>
              We’d like to use analytics cookies so we can understand how you
              use the MOD Digital Standards system and make improvements.
            </p>
            <p>
              We also use essential cookies to remember if you’ve accepted
              analytics cookies.
            </p>
          </div>
        </div>

        <div className="govuk-button-group">
          <button
            value="accept"
            type="button"
            name="cookies"
            className="govuk-button"
            data-module="govuk-button"
            onClick={() => {
              setCookiePolicy(true);
            }}
          >
            Accept analytics cookies
          </button>
          <button
            value="reject"
            type="button"
            name="cookies"
            className="govuk-button"
            data-module="govuk-button"
            onClick={() => {
              setCookiePolicy(false);
            }}
          >
            Reject analytics cookies
          </button>
          <a className="govuk-link" href="/cookies">
            View cookies
          </a>
        </div>
      </div>
    </div>
  );

  const cookieConfirmationForm = (
    <div
      className="govuk-cookie-banner "
      data-nosnippet
      role="region"
      aria-label="Cookies on [name of service]"
    >
      <div className="govuk-cookie-banner__message govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <div className="govuk-cookie-banner__content">
              <p className="govuk-body">
                You’ve accepted additional cookies. You can{' '}
                <a className="govuk-link" href="#">
                  change your cookie settings
                </a>{' '}
                at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="govuk-button-group">
          <button
            role="button"
            draggable="false"
            className="govuk-button"
            data-module="govuk-button"
            onClick={hideCookieBanner}
          >
            Hide this message
          </button>
        </div>
      </div>
    </div>
  );

  if (cookiePolicyConfirmation) {
    return cookieConfirmationForm;
  }

  return cookieForm;
};

export default Cookie;
