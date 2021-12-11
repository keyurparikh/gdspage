import React from 'react';

interface LinkProps {
  href: string;
}

const Link: React.FC<LinkProps> = (props) => {
  const { href } = props;

  return (
    <a className="govuk-link govuk-link--no-visited-state" href={href}>
      {props.children}
    </a>
  );
};

export default Link;
