import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {BrowserRouter,Switch, useHistory} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountBoxICon from '@material-ui/icons/AccountBox';
import {ListItemText,Avatar} from '@material-ui/core/';
import {
    Dropdown
} from 'react-bootstrap';
import logo from '../../assets/logo.png'
import RouterLayout from '../router/routerLayout';
import default_avatar from '../../assets/default_avatar.png';
import {DashboardMenu} from '../../common/constant/DashboarMenu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -20,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbars: {
    background: '#121212',  
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    minHeight: '#80px !important',
    color: '#ffffff',
  },
  content: { 
    flexGrow: 1,
    background: '#ffffff',
    padding: theme.spacing(3),
  },
  colorWhite:{
      color: '#ffffff'
  },
  drawerList:{
      background: '#121212',
      color: '#ffffff'
  },
  divider:{
      background: '#292929'
  },
  active:{
    background: '#a4ce3a'
  },
  button:{
    '&:hover':{
      background: '#05a44d'
    }
  }
}));

const DashboardLayout=(props)=> {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {username} =props.user? props.user: {username: 'Admin'};
  const activeTab = props.activeTab? props.activeTab : 'Bảng điều khiển';
  const { children } = props;
  var history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = (e) =>{
    e.preventDefault();
    localStorage.removeItem('token');
    history.push('/login')
  }


  const renderProfile=()=>{
      return  (
        <div>
        <Dropdown alignRight>
           <Dropdown.Toggle id="dropdown-basic" className="profile-dropdown d-flex flex-row align-items-center">
           <Avatar alt={username} src={default_avatar} /><span className="ml-1">{username}</span>
           </Dropdown.Toggle>
       
           <Dropdown.Menu>
               <Dropdown.Item href="#=">Thông tin cá nhân</Dropdown.Item>
               <Dropdown.Item href="#">Đổi mật khẩu</Dropdown.Item>
               <Dropdown.Item href="#" onClick={handleLogout}>Đăng xuất</Dropdown.Item>
           </Dropdown.Menu>
       </Dropdown>
        </div>
      )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton >
         
          <div className="w-100 align-items-center d-flex flex-row justify-content-between">
          <div className="brand d-flex align-items-center">
          <a href="/">
          <img className="logo d-inline-block" src={logo} alt="Comic Zone"></img>
          </a>
          <span className="brand-text">Comic Zone</span>
          </div>

          {
            renderProfile()
            }
          </div>

         </Toolbar>
 
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }, "dashboard-drawer")}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbars}>
          <IconButton className={classes.colorWhite} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        {
        DashboardMenu.map((menu, index) => (
        [<List className={classes.drawerList} key={`KEY${index}`}>
          {menu.list.map((item, index) => (
            <a className="text-decoration-none" href={item.link}>
            <ListItem button  key={item.text} className={`${classes.button}  ${item.text === activeTab &&classes.active}` }>
              <ListItemIcon className={classes.colorWhite}>{item.icon}</ListItemIcon>
              <ListItemText  className={classes.colorWhite} primary={item.text} />
            </ListItem>
            </a>
          ))}
        </List>,
        <Divider  className={classes.divider} />]
        ))
        }
      
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}  
      </main>
    </div>
  );
}

DashboardLayout.propTypes = {
    children: PropTypes.node
  };

export default DashboardLayout;
  