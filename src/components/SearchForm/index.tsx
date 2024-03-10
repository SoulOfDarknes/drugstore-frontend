import React, { useState, ChangeEvent, FormEvent } from 'react';
import './styles.scss';

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        type="text"
        placeholder="Enter email, phone number"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
