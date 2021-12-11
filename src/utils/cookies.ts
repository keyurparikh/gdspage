const setCookie = (name: string, content: string) => {};
const setAnalyticsCookiePolicy = (accept: boolean) => {
  const yearFromToday = new Date();
  yearFromToday.setFullYear(yearFromToday.getFullYear() + 1);
  document.cookie = `mod_digital_standards_cookies_policy=${JSON.stringify({
    analytics: accept,
    version: 1,
  })};  path='/'; domain:${
    window.location.hostname
  } SameSite='strict'; Secure; expires=${yearFromToday.toUTCString()}`;
};

const getAnalyticsCookiePolicy = (cookies: { [x: string]: any }): any => {
  return cookies.mod_digital_standards_cookies_policy;
};

export { setCookie, setAnalyticsCookiePolicy, getAnalyticsCookiePolicy };
