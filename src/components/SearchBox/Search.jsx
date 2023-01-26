import React from 'react'

const Search = (props) => {
  const [option, setOptions] = React.useState(props.option);

  const searchOptions = (event) => {
    if (event.target.value === '' || event.target.value === null) {
      setOptions(props.option);
      return;
    }
    const results = props.filteredMethod(option, event.target.value);

    if (results.length === 0) {
      setOptions(['item not found']);
      return;
    }
    setOptions(results)
  }

  return props.render(option, searchOptions)
}

export default Search;