import React, {useState} from 'react';
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
import ComicPage from './screen/ComicPage';
import ReadingScreen from './screen/Reading';
import RouteLayout from './components/router/routerLayout';
import DashboardLayout from './components/Layout/DashboardLayout';
import Upload from './screen/Upload';
import PageLayout from './components/Layout/PageLayout';

function App() {

  const {state, setState} = useState({hideNav: false, hideFooter: false}); 
  return (
    <div className="App">
      <ScrollTop/>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
          <RouteLayout path="/" exact layout={PageLayout} component={Home}>
          </RouteLayout>
          <RouteLayout path="/results/:search" layout={PageLayout} component={SearchResult}>
          </RouteLayout>
          <RouteLayout exact path="/comic/:slug" layout={PageLayout} component={ComicPage}>
          </RouteLayout>
          <RouteLayout exact path="/comic/:slug/:id" layout={PageLayout} component={ReadingScreen}>
          </RouteLayout>
          <RouteLayout exact path="/admin/upload" layout={DashboardLayout} component={Upload}></RouteLayout>
        </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>

    </div>
  );
}

export default App;
