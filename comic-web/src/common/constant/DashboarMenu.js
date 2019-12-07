import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ListIcon from '@material-ui/icons/List';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import CategoryIcon from '@material-ui/icons/Category';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BackupIcon from '@material-ui/icons/Backup';
import BlockIcon from '@material-ui/icons/Block';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
const DashboardMenu = [
   { list:[
        {text:'Dashboard',icon:<DashboardIcon/>,link:'/admin/'},
        {text:'Schedule ',icon:<ScheduleIcon/>,link: '/admin/create-admin'},
        {text:'Statistics',icon:<EqualizerIcon/>,link: '/admin/statistics'},
    ]},
   { list:
    [
        {text:'Navigation Bar',icon:<ListIcon/>,link: '/admin/navigation-bar'},
        {text:'Notifications',icon:<AddAlertIcon/>,link: '/admin/alert'},
    ]},
    {list:
        [
        {text:'Authors',icon:<PermContactCalendarIcon/>,link: '/admin/authors'},
        {text:'Categories',icon:<CategoryIcon/>,link: '/admin/categories'},
        {text:'Comics',icon:<ImportContactsIcon/>,link: '/admin/comics'},
        {text:'Upload',icon:<BackupIcon/>,link: '/admin/upload'},
    ]},
    {list:[
        {text: 'Blocked List', icon: <BlockIcon/>, link: '/adminblocked-list'}, 
        {text: 'Comments', icon: <SpeakerNotesIcon/>, link: '/admin/comments'}, 
        {text:'Users', icon: <PeopleAltIcon/>,link: '/admin/users'},
    ]}
]

export {DashboardMenu}