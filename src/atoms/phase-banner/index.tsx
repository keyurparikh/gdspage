import React from 'react';

interface PhaseBannerProps {
  phase: 'alpha' | 'beta' | 'experimental';
}

const PhaseBanner: React.FC<PhaseBannerProps> = (props) => {
  const { phase } = props;
  return (
    <div className="govuk-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag">
          {phase}
        </strong>
        <span className="govuk-phase-banner__text">{props.children}</span>
      </p>
    </div>
  );
};

export default PhaseBanner;
