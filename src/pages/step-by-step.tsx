import { useEffect } from 'react';
import WidthContainer from '../atoms/containers/width-container';
import Link from '../atoms/link';
import StepByStepContainer from '../atoms/step-by-step/step-by-step-container';
import StepByStepItem from '../atoms/step-by-step/step-by-step-item';
import './step-by-step.scss';

const StepByStepPage = () => {
  useEffect(() => {
    document.title = 'JSP604 guidance: Step by step';
  }, []);

  return (
    <WidthContainer id="top">
      <a
        className="govuk-back-link"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}
      >
        Back
      </a>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">
            Get your project through JSP604 assurance
          </h1>

          <p>
            The JSP604 assurance process is designed to ensure that projects and
            services meet certain standards before being released into live
            operation. There are currently 22 rules covering a wide range of
            subjects. This guidance has grouped the rules into themes to make it
            easier for project teams to follow the steps required.
          </p>

          <p>
            For a complete breakdown of JSP604 see the{' '}
            <Link href="JSP604-rules.html">list of JSP604 Rules</Link>
          </p>
          <h1 className="govuk-heading-l">JSP604 guidance: step by step</h1>

          <p>Check what you need to do to comply with the JSP604 rules.</p>

          <StepByStepContainer
            id="step-by-step-navigation1"
            showText={'Show'}
            hideText={'Hide'}
            showAllText={'Show All'}
            hideAllText={'Hide All'}
          >
            <StepByStepItem id="commercial-guidance" title="Commercial">
              <p className="app-step-nav__paragraph">
                Certain commercial arrangements must be in place before starting
                any project activities.
              </p>

              <ol className="app-step-nav__list " data-length="3">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="1.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="1.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="1.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Blog: blog title here
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="./#">Rule 18</a>
              </p>
            </StepByStepItem>
            <StepByStepItem id="delivery-guidance" title="Delivery">
              <ol className="app-step-nav__list " data-length="1">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="2.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                    <span className="app-step-nav__context">
                      Additional context if required
                    </span>
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="2.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                    <span className="app-step-nav__context"></span>
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="2.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                    <span className="app-step-nav__context"></span>
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="2.4"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                    <span className="app-step-nav__context"></span>
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="#top">Rule nn</a>
              </p>
            </StepByStepItem>
            <StepByStepItem id="security-guidance" title="Security">
              <p className="app-step-nav__paragraph">
                Add description of this here
              </p>

              <ol className="app-step-nav__list " data-length="4">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="3.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    add something useful in here{' '}
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="3.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    and in here{' '}
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="3.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    here as well{' '}
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="3.4"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    And one final thing{' '}
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="#top">Rule nn</a>
              </p>
            </StepByStepItem>
            <StepByStepItem id="technology-guidance" title="Technology">
              <ol className="app-step-nav__list " data-length="3">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="4.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="4.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    rel="external"
                    data-position="4.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Blog: How project xxxx used the technology code of practice
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="#top">Rule nn</a>
              </p>
            </StepByStepItem>
            <StepByStepItem id="data-guidance" title="Data">
              <p className="app-step-nav__paragraph">
                Further guidance on data, information management etc etc etc
                (good content required here!).
              </p>

              <ol className="app-step-nav__list " data-length="5">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="5.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    add link here{' '}
                    <span className="app-step-nav__context">PDF</span>
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="5.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    add link here{' '}
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="5.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    add link here{' '}
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="5.4"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    add link here{' '}
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="5.5"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    add link here{' '}
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="#top">Rule nn</a>
              </p>
            </StepByStepItem>
            <StepByStepItem
              id="service-management-guidance"
              title="Service Management"
            >
              <p className="app-step-nav__paragraph">
                Service Management covers the day to day activities aimed at
                improving the quality of the service, increase user satisfaction
                levels and reducing risk and cost.
              </p>

              <ol className="app-step-nav__list " data-length="5">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="6.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Add link here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="6.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Add link here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="6.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Add link here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="6.4"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Add link here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="6.5"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Add link here
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="#top">Rule nn</a>
              </p>
            </StepByStepItem>
            <StepByStepItem id="safety-guidance" title="Safety">
              <ol className="app-step-nav__list " data-length="3">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="7.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="7.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    rel="external"
                    data-position="7.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Blog: How project xxxx identified critical safety issues
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="#top">Rule nn</a>
              </p>
            </StepByStepItem>
            <StepByStepItem id="sustainability-guidance" title="Sustainability">
              <ol className="app-step-nav__list " data-length="3">
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="8.1"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    data-position="8.2"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Detailed step to be added here
                  </a>
                </li>
                <li className="app-step-nav__list-item js-list-item ">
                  <a
                    rel="external"
                    data-position="8.3"
                    className="app-step-nav__link js-link"
                    href="#top"
                  >
                    Blog: How project xxxx did something to support
                    sustainability
                  </a>
                </li>
              </ol>
              <p>
                Rules covered by this guidance: <a href="#top">Rule nn</a>
              </p>
            </StepByStepItem>
          </StepByStepContainer>
        </div>
      </div>
    </WidthContainer>
  );
};

export default StepByStepPage;
