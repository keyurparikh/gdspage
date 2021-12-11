import React from 'react';
import { Search } from '../../atoms/icons';
import './search-box.scss';

interface SearchBoxProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const { id, name, value, placeholder } = props;
  return (
    <div className="search-box">
      <input
        placeholder={placeholder}
        className="govuk-input"
        id={id}
        name={name}
        value={value}
        type="search"
      ></input>
      <button>
        <Search width="16" />
      </button>
    </div>
  );
};

export default SearchBox;
