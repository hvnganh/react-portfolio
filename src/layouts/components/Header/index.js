import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext/ThemeContext';

const cx = classNames.bind(styles);

function Header() {
    const value = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handleProjects = () => {
        navigate('/projects');
    };

    const handleEShop = () => {
        navigate('/eshop');
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
                <FontAwesomeIcon onClick={value.toggleTheme} className={cx('icon', value.theme)} icon={faReact} />
            </div>
        </div>
    );
}

export default Header;
