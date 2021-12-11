import React from 'react';
import WidthContainer from '../width-container';
import MainContainer from '../main-container';
import GridRow from '../../GridRow';
import GridCol from '../../GridCol';
import Link from '../../link';
import './search-container.scss';

const SearchContainer: React.FC = (props) => {
  // const searchContainerStyle: React.CSSProperties = {
  //   backgroundColor: '#1d70b8',
  //   color: '#ffffff',
  //   margin: 0,
  //   marginBottom: '15px !important',
  //   paddingTop: '30px',
  //   paddingBottom: '30px',
  // };
  return (
    <div className="govuk-container search-container">
      <WidthContainer>
        <GridRow>
          <GridCol setWidth="two-thirds">{props.children}</GridCol>
          <GridCol setWidth="one-third">
            <div className="top-links">
              <h2 className="title">Popular topics</h2>
              <ul className="govuk-list">
                <li>
                  <a href="/#" className="govuk-link govuk-link--inverse ">
                    JSP 604 for beginners
                  </a>
                </li>
                <li>
                  <a className="govuk-link govuk-link--inverse " href="/#">
                    JSP 604 guidance
                  </a>
                </li>
                <li>
                  <a className="govuk-link govuk-link--inverse " href="/#">
                    Digital Technology Rules
                  </a>
                </li>
                <li>
                  <a className="govuk-link govuk-link--inverse " href="/#">
                    Security
                  </a>
                </li>
                <li>
                  <a className="govuk-link govuk-link--inverse " href="/#">
                    Board calendars
                  </a>
                </li>
              </ul>
            </div>
          </GridCol>
        </GridRow>
      </WidthContainer>
    </div>
  );
};

export default SearchContainer;
