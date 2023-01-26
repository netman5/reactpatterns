import React from 'react'
import Search from './Search';
import SearchBox from './SearchBox';

const Autocomplete = ({ options }) => {
  const filteredMethod = (options, query) => {
    return options.filter((opt) => opt.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <Search
      option={options}
      filteredMethod={filteredMethod}
      render={
        (option, searchOptions) => (
          <SearchBox option={option} searchOptions={searchOptions} />
        )
      }
    />
  )
}

export default Autocomplete