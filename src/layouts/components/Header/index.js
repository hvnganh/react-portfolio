import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { useContext, useState } from 'react';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext/ThemeContext';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Header() {
    const value = useContext(ThemeContext);
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    const handleHome = () => {
        navigate('/');
        setIsActive(false);
        console.log('re render handleHome');
    };

    const handleProjects = () => {
        navigate('/projects');
        setIsActive(false);
        console.log('re render handleProjects');
    };

    const handleEShop = () => {
        navigate('/eshop');
        setIsActive(false);
        console.log('re render handleEShop');
    };

    const handleActiveMenu = () => {
        setIsActive(isActive === false ? true : false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('link-items')}>
                <button onClick={handleHome} className={cx('link-btn', value.theme)}>
                    About
                </button>
                <button onClick={handleProjects} className={cx('link-btn', value.theme)}>
                    Projects
                </button>
                <button onClick={handleEShop} className={cx('link-btn', value.theme)}>
                    E-Shop
                </button>
                <Tippy className={cx('tippy', value.theme)} placement="right-end" content="Change Color">
                    <FontAwesomeIcon onClick={value.toggleTheme} className={cx('icon', value.theme)} icon={faReact} />
                </Tippy>
            </div>
            <div className={cx('link-items', 'mobile')}>
                <div className={cx('mobile-menu')}>
                    <FontAwesomeIcon
                        onClick={handleActiveMenu}
                        className={cx('icon', value.theme)}
                        icon={faArrowCircleDown}
                    />
                </div>
                <ul className={cx('mobile-item-link', isActive ? 'active' : '')}>
                    <li className={cx('mobile-item')}>
                        <button onClick={handleHome} className={cx('link-btn', 'mobile-btn', value.theme)}>
                            About
                        </button>
                    </li>
                    <li className={cx('mobile-item')}>
                        <button onClick={handleProjects} className={cx('link-btn', 'mobile-btn', value.theme)}>
                            Projects
                        </button>
                    </li>
                    <li className={cx('mobile-item')}>
                        <button onClick={handleEShop} className={cx('link-btn', 'mobile-btn', value.theme)}>
                            E-Shop
                        </button>
                    </li>
                    <li className={cx('mobile-item')}>
                        <Tippy className={cx('tippy', value.theme)} placement="right-end" content="Change Color">
                            <FontAwesomeIcon
                                onClick={value.toggleTheme}
                                className={cx('icon', 'mobile-btn', value.theme)}
                                icon={faReact}
                            />
                        </Tippy>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
