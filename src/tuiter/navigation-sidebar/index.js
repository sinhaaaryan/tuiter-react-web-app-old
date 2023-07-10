import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter" className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
                <span className={`d-none d-xl-inline d-xxl-inline`}> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
                <span className={`d-none d-xl-inline d-xxl-inline`}> Explore</span>
            </Link>
            {/*<a className={`list-group-item*/}
            {/*        ${active === 'explore'?'active':''}`}>*/}
            {/*    Explore*/}
            {/*</a>*/}
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;