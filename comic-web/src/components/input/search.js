import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import { InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {  withRouter, useHistory} from 'react-router-dom'

const suggestions = [
  { label: 'One Piece' },
  { label: 'Bleach - Sứ mạng thần chết'},
  { label: 'Thám Tử Lừng Danh Conan'},
  { label: 'Đại chúa tể'},
  { label: 'Đấu La Đại Lục - Tuyệt thế đường môn'},
  { label: 'Đấu Phá Thương Khung'},
  { label: 'Doraemon'},
  { label: 'Dragon Ball'},
  { label: 'Naruto'},
  { label: 'Pokemon Special'},

];

function renderInputComponent(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps
  return (
    <InputBase
        onKeyPress={()=>inputProps.onKeyPress}
        fullWidth
        InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
//     {/* </div>
//         <div className="d-block">
//         <div className={classes.search}>
//   <InputBase
//       fullWidth
//       InputProps={{
//       inputRef: ref,
//       classes: {
//         root: classes.inputRoot,
//         input: classes.inputInput,
//       },
//       ...InputProps,
//     }}
//     {...other}
//   />
//    <div className={`d-flex align-items-center ${classes.searchIcon}`}>
//     <SearchIcon/>
//   </div>
// </div>
//   </div> */}

  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted}  component="div">
      <div>
        {parts.map(part => (
          <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    flexGrow:1
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    width:'100%'
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
  search: {
    display:'flex',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    paddingLeft: '10px',
    color: "#fff"
  },
  searchIcon: {
    width: theme.spacing(7),
    position: 'relative',
    pointerEvents: 'onClick',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#fff',
    flexGrow: 1,
  },
  inputInput: {     
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
    display: 'block',
  },
}));

function IntegrationAutosuggest() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    single: '',
    popper: '',
  });

  let history = useHistory();

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleClickSearch =(e)=>{
    e.preventDefault();
    if(state.single.length>0){
      const search = state.single;
      setState({single: ''})
      history.push(`/results/${search}`)
    }
  }
  const handleKeyPress =(e)=>{
      if(e.target.value.length>0 && e.key === 'Enter'){
        const search = state.single;
        setState({single: ''})
        history.push(`/results/${search}`)
      }
      return false;

  }

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <div className={classes.root}>
      <div className="d-block">
        <div className={classes.search}>
          <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            id: 'react-autosuggest-simple',
            label: 'Country',
            placeholder: 'Nhập tên truyện, tác giả để tìm kiếm...',
            value: state.single,
            onChange: handleChange('single'),
            onKeyPress: (e)=>handleKeyPress(e)
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
          /> 
          <div onClick={handleClickSearch} className={`d-flex align-items-center ${classes.searchIcon}`}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(IntegrationAutosuggest);