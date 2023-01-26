import React from 'react'
import Search from './Search';
import SearchBox from './SearchBox';

const Autocomplete = ({ options }) => {
  const filteredMethod = (options, query) => {
    return options.filter((opt) => opt.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <Search
      query={''}
      option={options}
      filteredMethod={filteredMethod}
      render={
        (option, searchOptions, query) => (
          <SearchBox option={option} searchOptions={searchOptions} query={query} />
        )
      }
    />
  )
}

export default Autocomplete