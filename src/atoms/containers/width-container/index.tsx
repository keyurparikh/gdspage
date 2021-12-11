import React from 'react';

interface WidthContainerProps {
  id?: string;
  cname?: string;
  style?: React.CSSProperties;
}

const WidthContainer: React.FC<WidthContainerProps> = (props) => {
  const { id, style, cname } = props;

  return (
    <div
      id={id}
      className={`govuk-width-container app-width-container ${cname}`}
      style={style}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default WidthContainer;
