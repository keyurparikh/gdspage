import React from 'react';
import Logo from '../logo';
import './header.scss';
const Header: React.FC = (props) => {
  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container header-wrapper">
        <Logo alt={'Ministry of Defence'} />
        <div className="govuk-header__content">
          <a
            href="/#"
            className="govuk-header__link govuk-header__link--service-name"
          >
            {props.children}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
