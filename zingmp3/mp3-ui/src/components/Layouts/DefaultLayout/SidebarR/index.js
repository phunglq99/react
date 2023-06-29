import classNames from "classnames/bind";
import styles from './SidebarR.module.scss'

const cx = classNames.bind(styles)

function SidebarR() {
    return (
        <div className={cx('wrapper')}>
            SidebarR
        </div>
    );
}

export default SidebarR