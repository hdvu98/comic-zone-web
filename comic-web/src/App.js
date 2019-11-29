import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import '../src/style/index.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/header/Header';
import theme from './theme/index';
import Navbars from './components/navigation-bar/NavigationBar';
import Home from './screen/home';
import Footer from './components/footer/footer';
import ScrollTop from './components/scrollTop/scrollTop';
import SearchResult from './screen/SearchResult';

function App() {
  return (
    <div className="App">
      <ScrollTop/>
      <MuiThemeProvider theme={theme}>
        {/* <Header/> */}

        <BrowserRouter>
        <Navbars/>
          <Switch>
          <Route path="/" exact component={Home}>
          </Route>
          <Route path="/results/:search" component={SearchResult}>
          </Route>
        </Switch>
        </BrowserRouter>
        <Footer/>
      </MuiThemeProvider>

    </div>
  );
}

export default App;
