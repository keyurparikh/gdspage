import React from 'react';

interface GridColProps {
  setWidth:
    | 'full'
    | 'one-half'
    | 'one-third'
    | 'two-thirds'
    | 'one-quarter'
    | 'three-quarters';
}

const GridCol: React.FC<GridColProps> = (props) => {
  const { setWidth } = props;

  return (
    <div className={`govuk-grid-column-${setWidth}`}>{props.children}</div>
  );
};

export default GridCol;
