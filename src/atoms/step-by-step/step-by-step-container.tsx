import React from 'react';
import { useState } from 'react';

interface StepByStepProps {
  id: string;
  showText: string;
  hideText: string;
  showAllText: string;
  hideAllText: string;
}

const StepByStepContainer: React.FC<StepByStepProps> = ({
  children,
  ...props
}) => {
  const { id, showText, hideText, showAllText, hideAllText } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const [steps, setSteps] = useState<{ (data: boolean): void }[]>([]);
  // const steps: { (data: boolean): void }[] = [];

  const display = () => {
    steps.forEach((s) => s(!expanded));
    setExpanded(!expanded);
  };

  const register = (step: (step: boolean) => void) => {
    steps.push(step);
    setSteps(steps);
  };

  const childrenWithProps = React.Children.map(children, (child, index) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      var clone = React.cloneElement(child, {
        showText,
        hideText,
        position: index + 1,
        registerFn: register,
      });
      return clone;
    }
    return child;
  });

  return (
    <div
      id={id}
      className="app-step-nav app-step-nav--large app-step-nav--active"
      data-show-text={showText}
      data-hide-text={hideText}
      data-show-all-text={showAllText}
      data-hide-all-text={hideAllText}
    >
      <div className="app-step-nav__controls">
        <button
          aria-expanded="false"
          className="app-step-nav__button app-step-nav__button--controls js-step-controls-button"
          aria-controls="step-panel-commercial-guidance-1"
          onClick={display}
        >
          {expanded ? hideAllText : showAllText}
        </button>
      </div>
      <ol className="app-step-nav__steps">{childrenWithProps}</ol>
    </div>
  );
};

export default StepByStepContainer;
