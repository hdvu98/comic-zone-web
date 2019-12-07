/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ListComics} from '../../common/constant/comics';

const  AutoCompleteSelect=(props)=> {
  const options = ListComics.map(option => {
    const firstLetter = option.comicName[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const {getInput} = props;

  const handleChange = (e) =>{
    getInput(e.target.value ? true : false)
  }

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={option => option.firstLetter}
      getOptionLabel={option => option.comicName}
      style={{ width: '100%' }}
      renderInput={params => (
        <TextField {...params} label="Comic name" variant="outlined" fullWidth onSelect= {handleChange} />
      )}
    />
  );
}
export default AutoCompleteSelect;