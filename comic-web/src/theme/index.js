import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        "fontFamily": "\"Montserrat\", sans-serif",
    },
    palette: {
        primary:{
            main:'#121212',
            light: '#292929'
        } ,
    },

});

export default theme;