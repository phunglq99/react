import classNames from "classnames/bind";

import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarR from "./SidebarR";
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className="container">
                <Header />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <SidebarR />
        </div>
    );
}

export default DefaultLayout