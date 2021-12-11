import React from 'react';

const WidthContainer: React.FC = (props) => {
  return (
    <div className="govuk-container app-width-container">{props.children}</div>
  );
};

export default WidthContainer;
