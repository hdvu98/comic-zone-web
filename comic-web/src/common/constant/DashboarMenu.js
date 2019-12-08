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
        {text:'Bảng điều khiển',icon:<DashboardIcon/>,link:'/admin/'},
        {text:'Lịch phát hành',icon:<ScheduleIcon/>,link: '/admin/create-admin'},
        {text:'Thống kê',icon:<EqualizerIcon/>,link: '/admin/statistics'},
    ]},
   { list:
    [
        {text:'Tùy chọn Menu',icon:<ListIcon/>,link: '/admin/navigation-bar'},
        {text:'Thông báo',icon:<AddAlertIcon/>,link: '/admin/alert'},
    ]},
    {list:
        [
        {text:'Tác giả',icon:<PermContactCalendarIcon/>,link: '/admin/authors'},
        {text:'Thể loại',icon:<CategoryIcon/>,link: '/admin/categories'},
        {text:'Bộ truyện',icon:<ImportContactsIcon/>,link: '/admin/comics'},
        {text:'Đăng tải',icon:<BackupIcon/>,link: '/admin/upload'},
    ]},
    {list:[
        {text: 'Chặn', icon: <BlockIcon/>, link: '/adminblocked-list'}, 
        {text: 'Bình luận', icon: <SpeakerNotesIcon/>, link: '/admin/comments'}, 
        {text:'Người dùng', icon: <PeopleAltIcon/>,link: '/admin/users'},
    ]}
]

export {DashboardMenu}