import React from 'react';
import './paragraph.scss';

const Paragraph: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <p {...props}>{props.children}</p>;
};

export default Paragraph;
