import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from '@mui/icons-material'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Dashboard
                    </div>

                    <ul className="sidebarList">
                        <Link to='/'>

                            <li className="sidebarListItem">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>

                        <Link to='/analytics'>
                            <li className="sidebarListItem">
                                <Timeline className='sidebarIcon' />
                                Analytics
                            </li>
                        </Link>
                        <Link to='/sales'>
                            <li className="sidebarListItem">
                                <TrendingUp className='sidebarIcon' />
                                Sales
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                        <Link to='/users'>
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>

                        </Link>                       <Link to='/products'>
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>

                        <Link to='/transactions'>
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Transactions
                            </li>
                        </Link>
                        <Link to='/reports'>
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon" />
                                Reports
                            </li>
                        </Link>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">

                        <Link to='/mail'>
                            <li className="sidebarListItem">
                                <MailOutline className="sidebarIcon" />
                                Mail
                            </li>
                        </Link>
                        <Link to='/feedback'>
                            <li className="sidebarListItem">
                                <DynamicFeed className="sidebarIcon" />
                                Feedback
                            </li>
                        </Link>
                        <Link to='/messages'>
                            <li className="sidebarListItem">
                                <ChatBubbleOutline className="sidebarIcon" />
                                Messages
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">

                        <Link to='/manage'>
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                                Manage
                            </li>
                        </Link>

                        <Link to='/analytics'>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li>
                        </Link>
                        <Link to='/reports'>
                            <li className="sidebarListItem">
                                <Report className="sidebarIcon" />
                                Reports
                            </li>

                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar