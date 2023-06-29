import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className={cx('search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input placeholder="Tìm bài hát, nghệ sĩ,..." spellCheck={false} />
                    </div>
                </div>
                <div className={cx('right')}></div>
            </div>
        </div>
    );
}

export default Header;