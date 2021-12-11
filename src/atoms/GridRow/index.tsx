import React from 'react';

const GridRow: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={`govuk-grid-row ${className}`} {...rest}>
      {props.children}
    </div>
  );
};

export default GridRow;
