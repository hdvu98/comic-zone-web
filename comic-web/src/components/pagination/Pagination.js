import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from "material-ui-flat-pagination";

const theme = createMuiTheme();

const useStyles = makeStyles(theme => ({
    root:{
        fontSize:'14px',
        color: '#ffffff',
        margin:'2rem 0'
    },
    rootCurrent:{
        background: "#a4ce3a",
        color: '#ffffff'
    },
    disabled:{
        color: '#ffffff'
    },
    rootStandard:{
        color: '#ffffff'
    }
}))

const MyPagination =(props)=> {

  const [offset, setOffet] = useState(0);
  const {total}= props;

  const classes = useStyles();
 
  const handleClick=(offset)=> {
    setOffet(offset);
  }
 
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
            classes={classes}
          limit={8}
          offset={offset}
          total="100"
          onClick={(e, offset) => handleClick(offset)}
        />
      </MuiThemeProvider>
    );
}

export default MyPagination;