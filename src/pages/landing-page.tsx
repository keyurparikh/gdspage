import React, { useEffect } from 'react';
import WidthContainer from '../atoms/containers/width-container';
import SearchContainer from '../atoms/containers/search-container';
import SearchBox from '../compounds/search-box';
import GridRow from '../atoms/GridRow';
import GridCol from '../atoms/GridCol';
import Link from '../atoms/link';
import Paragraph from '../atoms/paragraph';
import './landing-page.scss';

const LandingPage: React.FC = (props) => {
  useEffect(() => {
    document.title = 'MOD Digital Standards';
  }, []);
  return (
    <>
      <SearchContainer>
        <div className="govuk-!-margin-top-5 govuk-!-margin-bottom-3">
          <h1 className="govuk-heading-xl title-text">
            Welcome to Standards as a Service
          </h1>
        </div>
        <p className="top-intro">
          You’ll find all the{' '}
          <span className="stand-out">standards and guidance</span> for your
          digital products and services here
        </p>

        <SearchBox placeholder="Search the Standards" />
      </SearchContainer>
      <WidthContainer style={{ paddingTop: '25px' }}>
        <section
          className="home-services"
          aria-labelledby="services-and-information-label"
          id="services-and-information"
        >
          <GridRow>
            <GridCol setWidth="one-third">
              <ul className="govuk-list">
                <li>
                  <h3 className="heading">
                    <Link href="/step-by-step">
                      JSP604 guidance: Step by step
                    </Link>
                  </h3>
                  <Paragraph className="para">
                    Follow the guidance to ensure your project meets the MOD
                    standards
                  </Paragraph>
                </li>

                <li>
                  <h3 className="heading">
                    <Link href="/#">Security in MOD</Link>
                  </h3>
                  <Paragraph className="para">
                    Understand the security standards that your project or
                    service must meet
                  </Paragraph>
                </li>
                <li>
                  <h3 className="heading">
                    <Link href="/#">Service sustainability</Link>
                  </h3>
                  <Paragraph className="para">
                    Ensure your service meets sustainability needs such as
                    biodiversity, carbon reduction, environmental protection and
                    social value.
                  </Paragraph>
                </li>
              </ul>
            </GridCol>
            <GridCol setWidth="one-third">
              <ul className="govuk-list">
                <li>
                  <h3 className="heading">
                    <Link href="/#">Project requirements</Link>
                  </h3>
                  <Paragraph className="para">
                    Make sure your project covers connectivity, architecture,
                    service management and safety concerns.
                  </Paragraph>
                </li>
                <li>
                  <h3 className="heading">
                    <Link href="/#">Delivery planning</Link>
                  </h3>
                  <Paragraph className="para">
                    Understand how to successfully deliver your project by
                    managing scope, governance and risk.
                  </Paragraph>
                </li>
                <li>
                  <h3 className="heading">
                    <Link href="/#">The Digital Foundry</Link>
                  </h3>
                  <Paragraph className="para">
                    Find out how to set up digital services and work in
                    partnership with fellow digital experts throughout MOD.
                  </Paragraph>
                </li>
              </ul>
            </GridCol>
            <GridCol setWidth="one-third">
              <ul className="govuk-list">
                <li>
                  <h3 className="heading">
                    <Link href="https://www.gov.uk/government/collections/government-commercial-function">
                      Government Commercial Standards and Guidance
                    </Link>
                  </h3>
                  <Paragraph className="para">
                    Understand procurement, business cases, funding, managing
                    budgets and contract management.
                  </Paragraph>
                </li>
                <li>
                  <h3 className="heading">
                    <Link href="https://www.gov.uk/service-manual/service-standard">
                      Government Service Standard
                    </Link>
                  </h3>
                  <Paragraph className="para">
                    Follow the Service Standard to create and run services that
                    meet the needs of your users.
                  </Paragraph>
                </li>
              </ul>
            </GridCol>
          </GridRow>
          <hr className="divider" />
          <GridRow>
            <GridCol setWidth="one-half">
              <ul className="govuk-list">
                <li>
                  <h3 className="heading">
                    <Link href="/#">Communities of practice </Link>
                  </h3>
                  <Paragraph className="para">
                    Learn more about best practice by connecting with colleagues
                    within MOD and across wider government.
                  </Paragraph>
                </li>
              </ul>
            </GridCol>
            <GridCol setWidth="one-half">
              <ul className="govuk-list">
                <li>
                  <h3 className="heading">
                    <Link href="/#">JSP604 rules list </Link>
                  </h3>
                  <Paragraph className="para">
                    See the full list of rules that apply to all systems
                    connected to MOD’s ICT system.
                  </Paragraph>
                </li>
              </ul>
            </GridCol>
          </GridRow>
        </section>
      </WidthContainer>
    </>
  );
};

export default LandingPage;
