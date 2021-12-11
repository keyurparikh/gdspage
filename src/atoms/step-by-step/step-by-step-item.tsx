import React, { useEffect, useState } from 'react';

interface StepByStepItemProps {
  id: string;
  title: string;
  showText?: string;
  hideText?: string;
  position?: number;
  registerFn?: (reference: any) => void;
}

const StepByStepItem: React.FC<StepByStepItemProps> = (props) => {
  const { id, title, showText, hideText, position, registerFn } = props;

  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleDisplay = () => {
    display(!expanded);
  };

  const display = (state: boolean) => {
    setExpanded(state);
  };

  useEffect(() => {
    if (registerFn) {
      registerFn(display);
    }
  });

  return (
    <li className="app-step-nav__step js-step" id={id} onClick={toggleDisplay}>
      <div className="app-step-nav__header js-toggle-panel" data-position="1">
        <h2 className="app-step-nav__title">
          <span className="app-step-nav__circle app-step-nav__circle--number">
            <span className="app-step-nav__circle-inner">
              <span className="app-step-nav__circle-background">
                <span className="govuk-visually-hidden">Step</span> {position}
              </span>
            </span>
          </span>

          <button
            className="app-step-nav__button app-step-nav__button--title js-step-title-button"
            aria-expanded="false"
            aria-controls="step-panel-delivery-guidance"
          >
            <span className="js-step-title-text">{title}</span>
            <span
              className="app-step-nav__toggle-link js-toggle-link"
              aria-hidden="true"
              hidden
            >
              {expanded ? hideText : showText}
            </span>
          </button>
        </h2>
      </div>
      <div
        className={
          'app-step-nav__panel js-panel ' + (expanded ? '' : 'js-hidden')
        }
        id={`step-panel-commercial-guidance-1`}
      >
        {props.children}
      </div>
    </li>
  );
};

export default StepByStepItem;
