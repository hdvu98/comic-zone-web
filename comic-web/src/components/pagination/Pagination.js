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
        margin:'2rem 0',
       
    },
    rootCurrent:{
        background: "#a4ce3a",
        color: '#ffffff',
        '&:hover':{
          background:'#05a44d'
        }
    },
    colorInheritCurrent:{
      color: '#ffffff !inherit'
    },
    disabled:{
      color: '#6c757d !important'
    },
    rootStandard:{
        color: '#ffffff',
        '&:hover':{
          background:'#05a44d'
        }
    },
    textPrimary:{
      color:'#ffffff',
      '&:hover':{
        background:'#05a44d'
      }
    }
}))

const MyPagination =(props)=> {

  const [offset, setOffet] = useState(0);
  const {total}= props;
  const {limit} = props;

  const classes = useStyles();
 
  const handleClick=(offset)=> {
    setOffet(offset);
  }
 
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
            classes={classes}
          limit={limit}
          offset={offset}
          total={total}
          onClick={(e, offset) => handleClick(offset)}
        />
      </MuiThemeProvider>
    );
}

export default MyPagination;