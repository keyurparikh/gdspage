import React from 'react';

interface TextInputProps {
  id?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return <input className="govuk-input" name="event-name" type="text"></input>;
};

export default TextInput;
